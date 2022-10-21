import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import './message-cart.css'


function MensajeCarrito() {
    const [showMessage, setShowMessage] = useState(false);
    const [numberProduct, setNumberProduct] = useState(0);
    const { products, setProducts } = useContext(CartContext);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    /* Checking if there are products in local storage, if there are, it will set the number of
    products to the length of the products in local storage and it will set the products to the
    products in local storage. */
    useEffect(() => {
        let productsInLocalStorage = JSON.parse(localStorage.getItem('productsFocus'));
        if (productsInLocalStorage !== null) {
            setnumeroDeProductos(productosEnLocalStorage.length);
            setProducts(productsInLocalStorage);
        }
    }, []);

    /* A useEffect hook that is checking if the number of products is greater than the products length,
    if it is, it will set the message to "Se ha eliminado el producto del carrito" and the color to
    "#E54949". If the number of products is less than the products length, it will set the message
    to "Se ha agregado el producto al carrito" and the color to "#51D890". */
    useEffect(() => {
        if (numberProduct > products.length) {
            setMessage("Se ha eliminado el producto del carrito");
            setColor("#E54949");
            setTimeout(() => {
                setColor("");
                setMessage("");
            }, 3000);
        } else if (numberProduct < products.length) {
            setMessage("Se ha agregado el producto al carrito");
            setColor("#51D890");
            setTimeout(() => {
                setColor("");
                setMessage("");
            }, 3000);
        }
    }, [products]);


    return (
        <>
            {message != '' ?
                <div className='alert --message.cart' style={{ backgroundColor: color }}>
                    <span className='span'>{message}</span>
                </div>
                : <></>
            }
        </>
    )
}

export default MensajeCarrito