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
import AdmProductSalesList from "./components/admproducts/SalesList/SalesList"; //listado de ventas

function App() {
  return (
    <>
      <div id="wrapper">
        <div id="content">
        <CartContextProvider>
          <Header />
          <Route path="/marcas" component={Marcas} />
          <Route path="/about" component={About} />
          <Cart />
          <MessageCart />
          {/*<FormProducts />*/}
          {/*<ProductCard />*/}
          {/*<DetailProducts />*/}
          {/*<AdmProductList />*/}
          <AdmProductSalesList />
        </CartContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
