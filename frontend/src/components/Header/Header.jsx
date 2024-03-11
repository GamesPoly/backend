import React from 'react';
import './Header.scss'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '@assets/logo.svg';
import Search from './Search/Search';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import MenuButton from './MenuButton/MenuButton';

const Header = ({ openMenu }) => {
    // const login = 'test2@test.com'; // захардкодил да
    // const password = '123456789'; // и чё вы мне сделаете
    //
    // // const [login, setLogin] = useState('');
    // // const [password, setPassword] = useState('');
    //
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //
    //     const loginData = {
    //         login,
    //         password,
    //     };
    //
    //     try {
    //         const response = await axios.post('http://localhost:8080/api/v1/auth/sign-in', loginData);
    //         console.log('Авторизован успешно:', response.data);
    //         // Место для хранения токена в хранилище/состоянии
    //     } catch (error) {
    //         console.error('Ошибка:', error.response ? error.response.data : error.message);
    //     }
    // };
    // по такому же принципу пишем запрос на регистрацию

    return (
        <header className="header">
            <div className="header__wrapper">
                <ul className="header__details">
                    <li className="header__item">
                            <Link to="/" className="header__link">
                                <img src={logo} alt="PolyGames Logo Image" className="header__logo" />
                            </Link>
                            <Search/>
                    </li>
                    <li className="header__item">
                        <ThemeSwitcher/>
                        <div className="header__auth">
                            <Link to="/auth" className="profile__link">
                                <p className="profile__login">
                                    Вход
                                </p>
                            </Link>
                            <Link to="/register" className="profile__link">
                                <p className="profile__register">
                                    Регистрация
                                </p>
                            </Link> 
                        </div>
                        <MenuButton clickButton={openMenu}/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
