import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import Star from '../../../assets/decorate-star-mini.svg'

// Интерфейс для пропсов компонента Sidebar
interface SidebarProps {
    activeSection: string
    setActiveSection: (section: string) => void // функция для смены активной секции
}

export const Sidebar: React.FC<SidebarProps> = ({
    activeSection,
    setActiveSection,
}) => {
    const sections = [
        'Основная информация',
        'Изображения продукта',
        'Файлы игры',
    ]

    return (
        <div className={styles['post-form__sidebar']}>
            <img
                className={styles['sidebar__decoration']}
                src={Star}
                alt="Звезда"
            />
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={
                        activeSection === section
                            ? styles['sidebar__btn_active']
                            : styles['sidebar__btn']
                    }
                >
                    {section}
                </button>
            ))}
        </div>
    )
}
