import './App.css'
import Header from './components/header/Header'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
      </CartContextProvider>
    </>
  )
}

export default App
