import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart/ItemCart';
import productsJSON from '../../services/products.json';
import './cart.css'

function Cart() {
    const { products, setProducts, showCart } = useContext(CartContext);

    useEffect(() => {
        setProducts(productsJSON);

    }, []);

    return (
        <>
            {
                showCart ?
                    <div className="container-cart-products">
                        {products.map(product =>
                            <ItemCart product={product} />
                        )}
                    </div>
                    : <></>}
        </>
    )
}

export default Cart