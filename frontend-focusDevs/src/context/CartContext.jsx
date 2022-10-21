import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    return (
        <CartContext.Provider
            value={{
                products,
                setProducts,
                showCart,
                setShowCart
            }}>
            {props.children}
        </CartContext.Provider>
    )
}