import React from 'react'
import styles from './AsideSettings.module.scss'
import starMini1 from '../../../../shared/assets/decorate-star-mini.svg'
import starMini2 from '../../../../shared/assets/decorate-star-mini2.svg'
import { useCatalogFilters } from '../../../../shared/lib/context/CatalogFiltersProvider'
import { genres, sets } from './constants/genresAndSets'

function AsideSettings() {
    const {
        selectedGenre,
        selectedSet,
        changeSelectedGenre,
        changeSelectedSet,
    } = useCatalogFilters()

    return (
        <aside className={styles['aside-settings']}>
            <div className={styles['aside-settings__lists']}>
                <ul className={styles['aside-settings__list']}>
                    <img
                        src={starMini1}
                        alt=""
                        className={styles['aside-settings__icon']}
                    />
                    <li className={styles['aside-settings__item']}>
                        <h5
                            className={
                                selectedGenre === 'all'
                                    ? styles['aside-settings__title']
                                    : styles['aside-settings__link']
                            }
                            onClick={() => changeSelectedGenre('all')}
                        >
                            Жанры
                        </h5>
                    </li>
                    {genres.map((item, index) => (
                        <li
                            className={styles['aside-settings__item']}
                            key={index}
                            onClick={() =>
                                changeSelectedGenre(item.filterValue)
                            }
                        >
                            <span
                                className={
                                    selectedGenre === item.filterValue
                                        ? styles['aside-settings__title']
                                        : styles['aside-settings__link']
                                }
                            >
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <ul className={styles['aside-settings__list']}>
                    <img
                        src={starMini2}
                        alt=""
                        className={styles['aside-settings__icon']}
                    />
                    <li className={styles['aside-settings__item']}>
                        <h5
                            className={
                                selectedSet === 'all'
                                    ? styles['aside-settings__title']
                                    : styles['aside-settings__link']
                            }
                            onClick={() => changeSelectedSet('all')}
                        >
                            Наборы
                        </h5>
                    </li>
                    {sets.map((item, index) => (
                        <li
                            className={styles['aside-settings__item']}
                            key={index}
                            onClick={() => changeSelectedSet(item.filterValue)}
                        >
                            <span
                                className={
                                    selectedSet === item.filterValue
                                        ? styles['aside-settings__title']
                                        : styles['aside-settings__link']
                                }
                            >
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default AsideSettings
