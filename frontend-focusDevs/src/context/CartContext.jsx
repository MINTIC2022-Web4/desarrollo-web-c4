import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [products, setProducts] = useState([]);
    return (
        <CartContext.Provider value={{ products, setProducts }}>
            {props.children}
        </CartContext.Provider>
    )
}