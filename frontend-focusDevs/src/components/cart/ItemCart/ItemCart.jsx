import React, { useRef } from 'react'
import plusIcon from '../../../assets/cart/plus.svg';
import restIcon from '../../../assets/cart/rest.svg';
import useCart from '../../../hooks/useCart';
import './item-cart.css'

function ItemCart({ product }) {
    const quantityRef = useRef();
    const { restProductsCart, sumProductsCart } = useCart();
    return (
        <div className='card-item-cart'>
            <div className='card-item-cart__image'>
                <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className='card-item-cart__info'>
                <div className='card-item-cart__info__name'>
                    <h3>{product.nombre}</h3>
                </div>
                <div className='card-item-cart__info__brand'>
                    <h4>{product.marca}</h4>
                </div>
                <div className='card-item-cart__info__options'>
                    <img src={restIcon}
                        onClick={() => restProductsCart(product)}
                        alt="icono para restar productos" />
                    <div className='card-item-cart__info__options__quantity'>
                        <h4 ref={quantityRef}>{product.cantidad}</h4>
                    </div>
                    <img src={plusIcon}
                        onClick={() => sumProductsCart(product)}
                        alt="icono para sumar productos" />
                    <span className='span card-item-cart__info__options__remove'>Eliminar del carrito</span>
                </div>
            </div>
            <div className="card-item-cart__price">
                <h4>${product.precio}</h4>
            </div>
        </div>
    )
}

export default ItemCart