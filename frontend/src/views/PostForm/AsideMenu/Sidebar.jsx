import React from 'react';
import {NavLink} from "react-router-dom";
import './Sidebar.scss'
import Star from '../../../assets/decorate-star-mini.svg'

export function Sidebar({activeSection, setActiveSection}) {
    const sections = ['Основная информация', 'Изображения продукта', 'Файлы игры'];
    return (
        <div className='post-form__sidebar'>
            <img className="sidebar__decoration" src={Star} alt="Звезда"/>
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={activeSection === section ? 'sidebar__btn_active' : 'sidebar__btn'}
                >
                    {section}
                </button>
            ))}
        </div>
    )
}