import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [productsCart, setProductsCart] = useState([]);
    return (
        <CartContext.Provider
            value={{
                products,
                setProducts,
                showCart,
                setShowCart,
                productsCart,
                setProductsCart
            }}>
            {props.children}
        </CartContext.Provider>
    )
}