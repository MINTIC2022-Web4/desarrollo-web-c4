import './App.css'
import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import MessageCart from './components/cart/MessageCart/MessageCart'

import { CartContextProvider } from './context/CartContext'
import { Route, useLocation } from 'wouter'
import About from './components/about/About'
import Marcas from './components/marcas/Marcas'

function App() {


  return (
    <>
      <CartContextProvider>
        <Header />
        <Route path='/marcas' component={Marcas} />
        <Route path="/about" component={About} />
        <Cart />
        <MessageCart />
      </CartContextProvider>
    </>
  )
}

export default App
