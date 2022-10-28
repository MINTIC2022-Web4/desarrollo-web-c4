import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart/ItemCart';
import productsJSON from '../../services/products.json';
import './cart.css'
import CountCart from './CountCart/CountCart';

function Cart() {
    const { productsCart, setProducts, showCart } = useContext(CartContext);

    // useEffect(() => {
    //     setProducts(productsJSON);

    // }, []);

    return (
        <>
            {
                showCart ?
                    <div className="cart-products">
                        <div className="container-cart-products">
                            {productsCart.map(product =>
                                <ItemCart product={product} />
                            )}
                        </div>
                        <CountCart />
                    </div>
                    : <></>}
        </>
    )
}

export default Cart