import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './count-cart.css'

function CountCart() {
    const { productsCart, setShowCart } = useContext(CartContext);
    const totalPrice = () => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        })
        let total = 0;

        productsCart.forEach(product => {
            total += product.precio;
        });
        total = formatter.format(total);
        return total;
    }
    return (
        <div className="count-cart">
            <div className='container-count-cart'>
                <div className="container-count-cart__subtotal">
                    <p>subtotal ({productsCart.length} productos):</p>
                    <span>{totalPrice()}</span>
                </div>
                <div className="container-count-cart__buttons">
                    <button className="container-count-cart__buttons-buy__buttons__cancel"
                        onClick={() => setShowCart(false)}
                    >Cancelar</button>
                    <button className="container-count-cart__buttons-buy__button__buy">Finalizar compra</button>
                </div>

            </div>
        </div>
    )
}

export default CountCart