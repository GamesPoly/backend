import React from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import Search from "./Search/Search";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import MenuButton from "./MenuButton/MenuButton";
import styles from "./Header.module.scss";

const Header = ({ openMenu }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <ul className={styles.header__details}>
                    <li className={styles.header__item}>
                        <Link to="/" className={styles.header__link}>
                            <img
                                src={logo}
                                alt="PolyGames Logo Image"
                                className={styles.header__logo}
                            />
                        </Link>
                        <Search />
                    </li>
                    <li className={styles.header__item}>
                        <ThemeSwitcher />
                        <div className={styles.header__auth}>
                            <Link to="/auth" className={styles.profile__link}>
                                <p className={styles.profile__login}>Вход</p>
                            </Link>
                            <Link
                                to="/register"
                                className={styles.profile__link}
                            >
                                <p className={styles.profile__register}>
                                    Регистрация
                                </p>
                            </Link>
                        </div>
                        <MenuButton clickButton={openMenu} />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
