import React from "react";
import "./Footer.scss";
import logo from "@assets/logo.svg";
import vkLogo from "@assets/vk.svg";
import tgLogo from "@assets/tg.svg";
import { Link, NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav footer__wrapper">
        <Link className={"footer__link"} to={"/"}>
          <img
            src={logo}
            alt="PolyGames Logo"
            className="aside-settings__icon footer__logo"
          />
        </Link>
        <ul className="footer__links">
          <li>
            <NavLink className={"footer__link"} to={"/"}>
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink className={"footer__link"} to={"/"}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className={"footer__link"} to={"/"}>
              Пользовательское соглашение
            </NavLink>
          </li>
          <li>
            <NavLink className={"footer__link"} to={"/"}>
              Контакты
            </NavLink>
          </li>

          <li>
            <NavLink className={"footer__link"} to={"/"}>
              Разработчикам
            </NavLink>
          </li>

          <li>
            <NavLink className={"footer__link"} to={"/"}>
              Политика конфиденциальности
            </NavLink>
          </li>
        </ul>
        <ul className="footer__socials">
          <li>
            <Link className={"footer__link"} to={"/"}>
              <img src={vkLogo} alt="Иконка VK" />
            </Link>
          </li>
          <li>
            <Link className={"footer__link"} to={"/"}>
              <img src={tgLogo} alt="Иконка TG" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
