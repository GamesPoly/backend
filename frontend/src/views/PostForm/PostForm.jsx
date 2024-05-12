import React, {useState} from 'react';
import './PostForm.scss'
import {Sidebar} from "@/views/PostForm/AsideMenu/Sidebar";

function PostForm() {
    const sections = ['Основная информация', 'Изображения продукта', 'Файлы игры'];
    const [activeSection, setActiveSection] = useState('Изображения продукта');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [tags, setTags] = useState('');
    const [os, setOs] = useState('');
    const [cpu, setCpu] = useState('');
    const [ram, setRam] = useState('');
    const [gpu, setGpu] = useState('');
    const [programSize, setProgramSize] = useState('');
    const [additionalReqs, setAdditionalReqs] = useState('');
    const [developers, setDevelopers] = useState('');
    const [contacts, setContacts] = useState('');
    const [genres, setGenres] = useState('');
    const [mainGenre, setMainGenre] = useState('');
    const [playersNumber, setPlayersNumber] = useState('');
    const [gameRewards, setGameRewards] = useState('');


    const handleProceed = () => {
        setActiveSection('Изображения продукта')
    }
    const renderSection = (section) => {
        switch (section) {
            case 'Основная информация':
                return <div className="post-form__section">
                    <h2 className="post-form__header">Выгрузка игры</h2>
                    <div className="post-form__element">
                        <label htmlFor='name' className="element__label">Название игры</label>
                        <p className="element__desc">Максимальная длина — 46 символов.</p>
                        <input onChange={setTitle} className="element__input" type="text" id='name'/>
                    </div>
                    <div className="post-form__element">
                        <label htmlFor='desc' className="element__label">Описание игры</label>
                        <p className="element__desc">Описание особенностей, уникального сюжета и аспектов вашей игры, которое будет отображаться на странице игры. <br/>Максимальная длина текста — 1000 символов.</p>
                        <input onChange={setDescription} className="element__input" type="text" id='desc'/>
                    </div>
                    <div className="post-form__element">
                        <label htmlFor='short_desc' className="element__label">Краткое описание</label>
                        <p className="element__desc">Краткое описание вашей игры, которое будет отображаться
                            в каталоге игр и превью. <br/>
                            Максимальная длина текста — 300 символов.</p>
                        <input onChange={setShortDescription} className="element__input" type="text" id='short_desc'/>
                    </div>
                    <div className="post-form__element">
                        <label htmlFor='keywords' className="element__label">Ключевые слова</label>
                        <p className="element__desc">Введите подходящие ключевые слова, по которым пользователь сможет найти вашу игру. Разделите слова запятой <br/>(прим: зомби, апокалипсис, выживание) </p>
                        <input onChange={setKeywords} className="element__input" type="text" id='keywords'/>
                    </div>
                    <div className="post-form__element">
                        <label htmlFor='tags' className="element__label">Тэги</label>
                        <p className="element__desc">Введите подходящие тэги, которые будут описывать особенности вашей игры. Используйте подсказки.</p>
                        <input onChange={setTags} className="element__input" type="text" id='tags'/>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Поддерживаемые платформы</h2>
                        <label htmlFor="windows" className="element__label_checkbox">
                            Windows
                            <input id="windows" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="macos" className="element__label_checkbox">
                            macOS
                            <input id="macos" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="linux" className="element__label_checkbox">
                            Linux
                            <input id="linux" className="element__checkbox" type="checkbox"/>
                        </label>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Минимальные системные требования</h2>
                        <div className="element__block">
                            <label htmlFor='cpu' className="element__label_horizontal">
                                Процессор (CPU)
                            </label>
                            <input onChange={setCpu} className="element__input" type="text" id='cpu'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='ram' className="element__label_horizontal">
                                Оперативная память (RAM)
                            </label>
                            <input onChange={setRam} className="element__input" type="text" id='ram'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='gpu' className="element__label_horizontal">
                                Видеокарта (GPU)
                            </label>
                            <input onChange={setGpu} className="element__input" type="text" id='gpu'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='space' className="element__label_horizontal">
                                Свободное место на жестком диске
                            </label>
                            <input onChange={setProgramSize} className="element__input" type="text" id='space'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='os' className="element__label_horizontal">
                                Операционная система
                            </label>
                            <input onChange={setOs} className="element__input" type="text" id='os'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='extra' className="element__label_horizontal">
                                Дополнительные требования*
                            </label>
                            <input onChange={setAdditionalReqs} className="element__input" type="text" id='extra'/>
                        </div>
                        <p className="element__extra-info">
                            *Если в списке не указаны прочие необходимые характеристики для вашей игры, укажите их в дополнительных требованиях
                        </p>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Контактная информация</h2>
                        <div className="element__block">
                            <label htmlFor='developers' className="element__label_horizontal">
                                Разработчики
                            </label>
                            <input onChange={setDevelopers} className="element__input" type="text" id='developers'/>
                        </div>
                        <div className="element__block">
                            <label htmlFor='contacts' className="element__label_horizontal">
                                Контакты для связи
                            </label>
                            <input onChange={setContacts} className="element__input" type="text" id='contacts'/>
                        </div>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Жанры</h2>
                        <label htmlFor="shooter" className="element__label_checkbox">
                            Шутеры
                            <input id="shooter" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="card-game" className="element__label_checkbox">
                            Карточные
                            <input id="card-game" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="strategy" className="element__label_checkbox">
                            Стратегии
                            <input id="strategy" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="adventure" className="element__label_checkbox">
                            Приключения
                            <input id="adventure" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="roleplay" className="element__label_checkbox">
                            Ролевые
                            <input id="roleplay" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="puzzle" className="element__label_checkbox">
                            Паззлы
                            <input id="puzzle" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="sport" className="element__label_checkbox">
                            Спорт
                            <input id="sport" className="element__checkbox" type="checkbox"/>
                        </label>
                        <label htmlFor="action" className="element__label_checkbox">
                            Экшены
                            <input id="action" className="element__checkbox" type="checkbox"/>
                        </label>
                        <div className="element__block">
                            <label htmlFor='main_genre' className="element__label_horizontal">
                                Основной жанр
                            </label>
                            <input onChange={setMainGenre} className="element__input" type="text" id='main_genre'/>
                        </div>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Количество игроков</h2>
                        <label className="element__label_checkbox">
                            Для одного игрока
                            <input name="question" className="element__checkbox" type="radio"/>
                        </label>
                        <label className="element__label_checkbox">
                            Мультиплеер
                            <input name="question" className="element__checkbox" type="radio"/>
                        </label>
                    </div>
                    <div className="post-form__element">
                        <label htmlFor='rewards' className="element__label">Награды игры</label>
                        <input onChange={setGameRewards} className="element__input" type="text" id='rewards'/>
                    </div>
                    <button onClick={handleProceed} className="post-form__proceed">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='15'
                            height='14'
                            viewBox='0 0 15 14'
                            fill='none'
                            className='btn__circle'
                        >
                            <path
                                d='M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z'
                                fill='black' // var(--primary-color)
                            />
                        </svg>
                        Продолжить
                    </button>
                </div>
            case 'Изображения продукта':
                return <div className="post-form__section">
                    <div className="post-form__element">
                        <h2 className="element__header">Иконка</h2>
                        <p className="element__desc">Иконка вашей игры, которая будет отображаться в каталоге.
                            Размер — 512 × 512 пикселей. Формат — PNG.</p>
                        <div className="dragndrop-area"></div>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Обложка</h2>
                        <p className="element__desc">Обложка вашей игры, которая будет отображаться
                            на странице игры.
                            Размер — 800 × 470 пикселей. Формат — PNG.</p>
                        <div className="dragndrop-area"></div>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Скриншоты</h2>
                        <p className="element__desc">Иконка вашей игры, которая будет отображаться в каталоге.
                            Размер — 512 × 512 пикселей. Формат — PNG.</p>
                        <div className="dragndrop-area"></div>
                    </div>
                    <div className="post-form__element">
                        <h2 className="element__header">Трейлер</h2>
                        <p className="element__desc">Представьте элементы игрового процесса, выделив преимущества и уникальные черты игры. Размещение соответствующих промо-материалов в каталоге направлено
                            на привлечение дополнительного внимания пользователей. <br/>
                            Соотношение сторон — 16 : 9. Формат — MP4.</p>
                        <div className="dragndrop-area"></div>
                    </div>
                </div>;
            case 'Файлы игры':
                return <div className="post-form__section">
                    Контент Раздела 3
                </div>;
            default:
                return null;
        }
    };
    return (
        <main className="post-form__wrapper">
            <div className="post-form__container">
                <Sidebar activeSection={activeSection} setActiveSection={setActiveSection}/>
                {renderSection(activeSection)}
            </div>
        </main>
    );
}

export default PostForm;