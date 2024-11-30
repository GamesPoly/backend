import React, { useState, ChangeEvent } from 'react'
import styles from './PostForm.module.scss'
import { Sidebar } from './AsideMenu/Sidebar'

// Интерфейс для пропсов компонента Sidebar
interface SidebarProps {
    activeSection: string
    setActiveSection: (section: string) => void
}

function PostForm() {
    const sections = [
        'Основная информация',
        'Изображения продукта',
        'Файлы игры',
    ]
    const [activeSection, setActiveSection] = useState<string>(
        'Основная информация'
    )

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [shortDescription, setShortDescription] = useState<string>('')
    const [keywords, setKeywords] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const [os, setOs] = useState<string>('')
    const [cpu, setCpu] = useState<string>('')
    const [ram, setRam] = useState<string>('')
    const [gpu, setGpu] = useState<string>('')
    const [programSize, setProgramSize] = useState<string>('')
    const [additionalReqs, setAdditionalReqs] = useState<string>('')
    const [developers, setDevelopers] = useState<string>('')
    const [contacts, setContacts] = useState<string>('')
    const [genres, setGenres] = useState<string>('')
    const [mainGenre, setMainGenre] = useState<string>('')
    const [playersNumber, setPlayersNumber] = useState<string>('')
    const [gameRewards, setGameRewards] = useState<string>('')

    const handleProceed = () => {
        setActiveSection('Изображения продукта')
    }

    const handleInputChange =
        (setState: React.Dispatch<React.SetStateAction<string>>) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            setState(event.target.value)
        }

    const renderSection = (section: string) => {
        switch (section) {
            case 'Основная информация':
                return (
                    <div className={styles['post-form__section']}>
                        <h2 className={styles['post-form__header']}>
                            Выгрузка игры
                        </h2>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="name"
                                className={styles['element__label']}
                            >
                                Название игры
                            </label>
                            <p className={styles['element__desc']}>
                                Максимальная длина — 46 символов.
                            </p>
                            <input
                                onChange={handleInputChange(setTitle)}
                                className={styles['element__input']}
                                type="text"
                                id="name"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="desc"
                                className={styles['element__label']}
                            >
                                Описание игры
                            </label>
                            <p className={styles['element__desc']}>
                                Описание особенностей, уникального сюжета и
                                аспектов вашей игры, которое будет отображаться
                                на странице игры. Максимальная длина текста —
                                1000 символов.
                            </p>
                            <input
                                onChange={handleInputChange(setDescription)}
                                className={styles['element__input']}
                                type="text"
                                id="desc"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="short_desc"
                                className={styles['element__label']}
                            >
                                Краткое описание
                            </label>
                            <p className={styles['element__desc']}>
                                Краткое описание вашей игры, которое будет
                                отображаться в каталоге игр и превью.
                                Максимальная длина текста — 300 символов.
                            </p>
                            <input
                                onChange={handleInputChange(
                                    setShortDescription
                                )}
                                className={styles['element__input']}
                                type="text"
                                id="short_desc"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="keywords"
                                className={styles['element__label']}
                            >
                                Ключевые слова
                            </label>
                            <p className={styles['element__desc']}>
                                Введите подходящие ключевые слова, по которым
                                пользователь сможет найти вашу игру. Разделите
                                слова запятой.
                            </p>
                            <input
                                onChange={handleInputChange(setKeywords)}
                                className={styles['element__input']}
                                type="text"
                                id="keywords"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="tags"
                                className={styles['element__label']}
                            >
                                Тэги
                            </label>
                            <p className={styles['element__desc']}>
                                Введите подходящие тэги, которые будут описывать
                                особенности вашей игры.
                            </p>
                            <input
                                onChange={handleInputChange(setTags)}
                                className={styles['element__input']}
                                type="text"
                                id="tags"
                            />
                        </div>
                        {/* Остальная часть формы */}
                        <button
                            onClick={handleProceed}
                            className={styles['post-form__proceed']}
                        >
                            Продолжить
                        </button>
                    </div>
                )
            case 'Изображения продукта':
                return (
                    <div className={styles['post-form__section']}>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Иконка
                            </h2>
                            <p className={styles['element__desc']}>
                                Иконка вашей игры, которая будет отображаться в
                                каталоге. Размер — 512 × 512 пикселей. Формат —
                                PNG.
                            </p>
                            <div className={styles['dragndrop-area']}></div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Обложка
                            </h2>
                            <p className={styles['element__desc']}>
                                Обложка вашей игры, которая будет отображаться
                                на странице игры. Размер — 800 × 470 пикселей.
                                Формат — PNG.
                            </p>
                            <div className={styles['dragndrop-area']}></div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Скриншоты
                            </h2>
                            <p className={styles['element__desc']}>
                                Иконка вашей игры, которая будет отображаться в
                                каталоге. Размер — 512 × 512 пикселей. Формат —
                                PNG.
                            </p>
                            <div className={styles['dragndrop-area']}></div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Трейлер
                            </h2>
                            <p className={styles['element__desc']}>
                                Представьте элементы игрового процесса, выделив
                                преимущества и уникальные черты игры. Размещение
                                соответствующих промо-материалов в каталоге
                                направлено на привлечение дополнительного
                                внимания пользователей. <br />
                                Соотношение сторон — 16 : 9. Формат — MP4.
                            </p>
                            <div className={styles['dragndrop-area']}></div>
                        </div>
                    </div>
                )
            case 'Файлы игры':
                return (
                    <div className={styles['post-form__section']}>
                        Контент Раздела 3
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <main className="post-form__wrapper">
            <div className="post-form__container">
                <Sidebar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                {renderSection(activeSection)}
            </div>
        </main>
    )
}

export default PostForm
