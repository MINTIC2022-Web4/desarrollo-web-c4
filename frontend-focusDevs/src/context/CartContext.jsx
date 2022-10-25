import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [productsCart, setProductsCart] = useState([]);
    const addProductsCart = (product) => {
        setProductsCart([...productsCart, product]);
    }
    return (
        <CartContext.Provider
            value={{
                products,
                setProducts,
                showCart,
                setShowCart,
                productsCart,
                addProductsCart
            }}>
            {props.children}
        </CartContext.Provider>
    )
}