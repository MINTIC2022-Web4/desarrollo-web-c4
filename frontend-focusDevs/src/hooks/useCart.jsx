import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function useCart() {
    const { productsCart, setProductsCart } = useContext(CartContext);
    const addProductsCart = (product) => {
        setProductsCart([...productsCart, product]);
    }
    const removeProductsCart = (product) => {
        setProductsCart(productsCart.filter(item => item.id !== product.id));
    }
    const restProductsCart = (product) => {
        const productCart = productsCart.find(item => item.id === product.id);
        if (productCart.cantidad > 1) {
            productCart.cantidad--;
            setProductsCart([...productsCart]);
        } else if (productCart.cantidad === 1) {
            removeProductsCart(product);
        }
    }
    const sumProductsCart = (product) => {
        const productCart = productsCart.find(item => item.id === product.id);
        productCart.cantidad++;
        setProductsCart([...productsCart]);
    }
    return {
        addProductsCart,
        removeProductsCart,
        restProductsCart,
        sumProductsCart
    }
}

export default useCart