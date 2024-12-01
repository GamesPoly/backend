import React from 'react'
import styles from './ForDevelopers.module.scss'
import { Link } from 'react-router-dom'
import arrow from './arrow.svg'

const ForDevelopers = () => {
    return (
        <div className={styles['for-developers']}>
            <h2 className={styles['for-developers__title']}>Разработчикам</h2>
            <p className={styles['for-developers__text']}>
                PolyGames - ваша платформа для выражения творчества. Не теряйте
                шанс поделиться своими игровыми мирами с нашим сообществом -
                загружайте свои игры.
            </p>
            <Link to={'/teams'} className={styles['for-developers__button']}>
                <img src={arrow} alt="" />
                Подробнее
            </Link>
        </div>
    )
}

export default ForDevelopers
