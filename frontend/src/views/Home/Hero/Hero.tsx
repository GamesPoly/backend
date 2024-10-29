import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
import decorateStarMini from "@assets/decorate-star-mini.svg";
import cover from "@assets/cover-game1.png";
import arrows from "@assets/arrows.svg";
import lines from "@assets/lines.svg";
import photo from "@assets/photo-hero.png";
import plus from "@assets/plus-circle.svg";
import gamepad from "@assets/gamepad.svg";
import star from "@assets/decorate-star.svg";
import ad1 from "@assets/ad-purple.png";
import ad2 from "@assets/ad-pazle.png";
import ad3 from "@assets/ad-player.png";
import games from "@assets/games-list.png";
const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__head"]}>
        <div className={styles["hero__tools"]}>
          <nav className={styles["hero__navigate navigate"]}>
            <img
              src={decorateStarMini}
              alt="Decorate Star"
              className={styles["navigate__decoration"]}
            />
            <ul className={styles["navigate__list"]}>
              <li className={styles["navigate__item"]}>
                <a href="/" className={`${styles["navigate__link"]} ${styles["navigate__link--active"]}`}>
                  Главная
                </a>
              </li>
              <li className={styles["navigate__item"]}>
                <a href="#popular" className={styles["navigate__link"]}>
                  Популярное
                </a>
              </li>
              <li className={styles["navigate__item"]}>
                <Link to="/about-us" className={styles["navigate__link"]}>
                  О нас
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles["hero__last-update"]} ${styles["last-update"]}`}>
            <img src={cover} alt="" className={styles["last-update__cover"]} />
            <div className={styles["last-update__details"]}>
              <div className={styles["last-update__info"]}>
                <h3 className={styles["last-update__title"]}>Veles Day</h3>
                <p className={styles["last-update__desc"]}>upd. 2 час назад</p>
              </div>
              <a href="/" className={styles["last-update__link"]}>
                <p className={styles["last-update__open"]}>Открыть</p>
                <div className={styles["last-update__circle"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    className="last-update__arrow"
                  >
                    <path
                      d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["hero__info"]}>
          <h1 className={styles["hero__title"]}>Публикуйся</h1>
          <h1 className={styles["hero__title"]}>обсуждай проекты</h1>
          <h1 className={styles["hero__title"]}>
            <span className={`${styles["hero__title"]} ${styles["hero__title--highlighted"]}`}>
              продвигай
            </span>{" "}
            свои игры
          </h1>
          <div className={styles["hero__details"]}>
            <img
              src={arrows}
              alt="Hero Arrows Decorate"
              className={styles["hero__arrows"]}
            />
            <p className={styles["hero__desc"]}>
              Расскажите о{" "}
              <span className={`${styles["hero__desc"]} ${styles["hero__desc--highlighted"]}`}>
                своих проектах
              </span>
              ,{" "}
              <span className={`${styles["hero__desc"]} ${styles["hero__desc--highlighted"]}`}>
                оценивайте
              </span>{" "}
              работы коллег, и объединяйтесь в{" "}
              <span className={`${styles["hero__desc"]} ${styles["hero__desc--highlighted"]}`}>
                команды
              </span>
            </p>
          </div>
        </div>
      </div>
      <ul className={styles["hero__cards"]}>
        <li className={styles["hero__card"]}>
          <div className={styles["hero__ad"]}>
            <div className={styles["hero__ad-line"]}>
              <p className={styles["hero__adtext"]}>Делитесь</p>
              <img
                src={plus}
                alt="Decorate plus in circle"
                className={styles["hero__adplus"]}
              />
            </div>
            <div className={styles["hero__ad-line"]}>
              <img
                src={plus}
                alt="Decorate plus in circle"
                className={styles["hero__adplus"]}
              />
              <p className={styles["hero__adtext"]}>Оценивайте</p>
            </div>
            <div className={styles["hero__ad-line"]}>
              <p className={styles["hero__adtext"]}>Сотрудничайте</p>
            </div>
          </div>
        </li>
        <li className={styles["hero__card"]}>
          <img src={star} alt="Decorate star" className={styles["hero__star"]} />
        </li>
        <li className="hero__card hero__card--bigger">
          <img src={photo} alt="Photo for Hero card" className={styles["hero__photo"]} />
          <img
            src={lines}
            alt="Lines decorated Hero card"
            className={styles["hero__lines"]}
          />
        </li>
        <li className={styles["hero__card"]}>
          <img src={ad1} alt="Decorate poster" className={styles["hero__cover"]} />
        </li>
        <li className={styles["hero__card"]}>
          <img src={gamepad} alt="Decorate gamepad" className={styles["hero__gamepad"]} />
        </li>
        <li className={styles["hero__card"]}>
          <img src={ad2} alt="Decorate poster" className={styles["hero__cover"]} />
        </li>
        <li className={styles["hero__card"]}>
          <img src={ad3} alt="Decorate poster" className={styles["hero__cover"]} />
        </li>
        <li className={`${styles["hero__card"]} ${styles["hero__card--higher"]}`}>
          <p className={styles["hero__about"]}>
            <span className={`${styles["hero__about"]} ${styles["hero__about--highlighted"]}`}>
              Подписывайтесь
            </span>{" "}
            на самых интересных разработчиков, чтобы получать их игровые новинки
            самыми первыми
          </p>
          <img
            src={games}
            alt="Decorate images covers by games"
            className={styles["hero__games"]}
          />
        </li>
      </ul>
    </section>
  );
};

export default Hero;
