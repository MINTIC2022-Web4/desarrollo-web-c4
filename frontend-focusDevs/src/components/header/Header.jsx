import { useContext } from 'react'
import searchIcon from '../../assets/header/searchIcon.svg'
import { CartContext } from '../../context/CartContext';
import notificationsIcon from '../../assets/header/notifications.svg'
import userIcon from '../../assets/header/clientIcon.svg'
import cartIcon from '../../assets/header/cartIcon.svg'
import { Link } from 'wouter';
import './header.css'

function Header() {
    const { products, showCart, setShowCart } = useContext(CartContext);
    const username = 'Juan'
    const handleClickShowCart = () => {
        setShowCart(!showCart);
    }
    return (
        <header>
            <div className="first-container-header">
                <div className="search-bar">
                    <img src={searchIcon} alt="Icon search" />
                    <input type="text" placeholder="Que quieres encontrar hoy" />
                </div>
                <div className="cart" onClick={handleClickShowCart}>
                    <img src={cartIcon} alt="Cart" />
                    <span>{products.length}</span>
                </div>
            </div>
            <div className="second-header-container">
                <div className="first-container">
                    <div className="select-list">
                        <select name="categorias" >
                            <option value="0">Categorias</option>
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                        </select>
                    </div>
                    <Link to="/marcas">Marcas</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className="second-container">
                    <div className="icons-container">
                        <img src={notificationsIcon} alt="icon notifications" />
                        <img src={userIcon} alt="icon user" />
                        <span>Hola {username}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header