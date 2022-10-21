import './App.css'
import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import MessageCart from './components/cart/MessageCart/MessageCart'

import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Cart />
        <MessageCart />
      </CartContextProvider>
    </>
  )
}

export default App
