import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import MessageCart from "./components/cart/MessageCart/MessageCart";
import { CartContextProvider } from "./context/CartContext";
import { Route, useLocation } from "wouter";
import About from "./components/about/About";
import Marcas from "./components/marcas/Marcas";
import ProductCard from "./components/customerProductCards/CustomerProductCards"; //vista principal del cliente para ver productos
import FormProducts from "./components/ProductsForm/ProductsForm"; //formulario para agregar productos
import DetailProducts from "./components/detailproducts/DetailProducts"; //detalle del producto
import AdmProductList from "./components/admproducts/admproductslist/ProductsList"; //listado de productos
import AdmProductSalesList from "./components/admproducts/saleslist/SalesList"; //listado de ventas
import Login from "./components/Login/Login";
import { UserContextProvider } from "./context/UserContext";
import { useEffect, useState } from "react";
import { hasRole, isAllowed } from "./auth";

/*let user = {
  roles: ["user", "admin"],
  rights: ["can_view_articles", "can_view_users"],
};*/

const App = () => {
  const [user, setUser] = useState({
    roles: ["user"],
    rights: ["puede_comprar"],
  });

  return (
    <>
      <div id="wrapper">
        <div id="content">
          <CartContextProvider>
            <UserContextProvider>
              <Header user={user} setUser={setUser} />
              {hasRole(user, ["admin"]) && (
                <Route path="/marcas" component={Marcas} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/about" component={About} />
              )}
              <Cart />
              <MessageCart />
              {hasRole(user, ["admin"]) && (
                <Route path="/from-product" component={FormProducts} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/" component={ProductCard} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/detail-products/:id/prueba">
                  {(params) => <DetailProducts id={params.id} />}
                </Route>
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/adm-product-list" component={AdmProductList} />
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/adm-sales-list" component={AdmProductSalesList} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/login">
                  {(params) => <Login setUser={setUser} />}
                </Route>
              )}

              {/*<FormProducts />*/}
              {/*<ProductCard />*/}
              {/*<DetailProducts />*/}
              {/*<AdmProductList />*/}
              {/*<AdmProductSalesList />*/}
            </UserContextProvider>
          </CartContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
