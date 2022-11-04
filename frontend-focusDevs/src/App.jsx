import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import MessageCart from "./components/cart/MessageCart/MessageCart";
import { CartContextProvider } from "./context/CartContext";
import { Route, useLocation } from "wouter";
import About from "./components/about/About";
import Marcas from "./components/marcas/Marcas";
import ProductCard from "./components/customerProductCards/CustomerProductCards";//vista principal del cliente para ver productos
import FormProducts from "./components/ProductsForm/ProductsForm"; //formulario para agregar productos
import DetailProducts from "./components/detailproducts/DetailProducts"; //detalle del producto
import AdmProductList from "./components/admproducts/admproductslist/ProductsList"; //listado de productos 
import AdmProductSalesList from "./components/admproducts/saleslist/SalesList"; //listado de ventas
import Login from "./components/Login/Login";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <div id="wrapper">
        <div id="content">
          <CartContextProvider>
            <UserContextProvider>
              <Header />
              <Route path="/marcas" component={Marcas} />
              <Route path="/about" component={About} />
              <Cart />
              <MessageCart />
              <Route path="/from-product" component={FormProducts} />
              <Route path="/home" component={ProductCard} />
              <Route path="/detail-products" component={DetailProducts} />
              <Route path="/adm-product-list" component={AdmProductList} />
              <Route path="/adm-sales-list" component={AdmProductSalesList} />
              <Route path="/login" component={Login} />
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
}

export default App;
