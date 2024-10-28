import React from 'react';
import './AchivementsItem.scss'

function AchivementsItem({name, desc, cover}) {
    return (  
        <li className="list__card">
            <div className="card__content">
                <img src={cover} alt="Изображение достижения" className='card__cover' />
                <div className="card__text">
                    <h4 className="card__title">{name}</h4>
                    <p className="card__desc">{desc}</p>
                </div>
            </div>
        </li>
    );
}

export default AchivementsItem;