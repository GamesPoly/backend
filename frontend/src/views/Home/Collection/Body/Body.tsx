import React from 'react';
import styles from './Body.module.scss';
import internet from '@assets/internet.svg'
import CardCollection from './Card/Card';

const CollectionBody = () => {
    return (
        <div className={styles["collection__body"]}>
            <div className={styles["collection__info"]}>
                <div className={styles["collection__caption"]}>
                    <div className={styles["collection__up-caption"]}>
                        <h2 className={styles["collection__title"]}>Цифровая витрина</h2>
                        <img src={internet} alt="Decorate Icon" className={styles["collection__icon"]} />
                    </div>
                    <div className={styles["collection__down-caption"]}>
                        <p className={styles["collection__number"]}>02</p>
                        <h2 className={styles["collection__title"]}>ваших достижений</h2>
                    </div>
                </div>
                <p className={styles["collection__desc"]}>
                    Заполните <span className={styles["collection__desc--highlight"]}>форму для отправки проекта</span>, после модерации ваша игра появится в каталоге и будет <span className="collection__desc--highlight">доступна всем</span>
                </p>
            </div>
            <ul className={styles["collection__cards"]}>
                <li className={styles["collection__card"]}>
                    <CardCollection version='standart' />
                </li>
                <li className={styles["collection__card"]}>
                    <CardCollection version='solid' />
                </li>
                <li className={styles["collection__card"]}>
                    <CardCollection version='mini' />
                    <CardCollection version='catalog' />
                </li>
            </ul>
        </div>
    );
};

export default CollectionBody;
