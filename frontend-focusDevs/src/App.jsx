import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import MessageCart from './components/cart/MessageCart/MessageCart'
import { CartContextProvider } from './context/CartContext'
import { Route, useLocation } from 'wouter'
import About from './components/about/About'
import Marcas from './components/marcas/Marcas'
import Products from './components/ProductsForm/ProductsForm'
function App() {


  return (
    <>
      <CartContextProvider>
        <Header />
        <Route path='/marcas' component={Marcas} />
        <Route path="/about" component={About} />
        <Cart />
        <MessageCart />
        <Products />
        <Footer />
      </CartContextProvider>
    </>
  )
}

export default App
