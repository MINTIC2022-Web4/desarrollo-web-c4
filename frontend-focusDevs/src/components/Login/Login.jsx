import React, { useRef } from 'react'
import userIcon from '../../assets/login/user.svg';
import passwordIcon from '../../assets/login/password.svg';
import './login.css'
import useUser from '../../hooks/useUser';
import { Link, useLocation } from 'wouter';

function Login({ setRol }) {

    const [location, setLocation] = useLocation();

    const { login } = useUser();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (user === 'admin' && password === 'admin') {
            setRol('admin');
            login();
            setLocation('/home');
        } else if (user != "admin" && password != "admin") {
            usernameRef.current.style.backgroundColor = "#eba2a9";
            passwordRef.current.style.backgroundColor = "#eba2a9";
        } else if (user != "admin") {
            usernameRef.current.style.backgroundColor = "#eba2a9";
        } else if (password != "admin") {
            passwordRef.current.style.backgroundColor = "#eba2a9";
        }
    }
    return (
        <div className="container-login">
            <div className="container-login__card">
                <div className="container-login__card__title">
                    <h1>Inicio de sesión</h1>
                </div>
                <div className="container-login__card__form">
                    <form>
                        <div className="container-login__card__form__input">
                            {/* <label htmlFor="email">Correo electrónico</label> */}
                            <img src={userIcon} alt="icono de usuario" />
                            <input type="text" name="username" id="username" placeholder="Username" useRef={usernameRef} />
                        </div>
                        <div className="container-login__card__form__input">
                            {/* <label htmlFor="password">Contraseña</label> */}
                            <img src={passwordIcon} alt="icono de password" />
                            <input type="password" name="password" id="password" placeholder="Contraseña" ref={passwordRef} />
                        </div>
                        <div className="container-login__card__form__input buttons-form">
                            <button type="submit" onClick={(event) => handleSubmit(event)}>Iniciar sesión</button>
                            <Link to="/">
                                <button type="submit">Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login