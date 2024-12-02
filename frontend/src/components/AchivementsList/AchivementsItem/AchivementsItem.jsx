import React from 'react';
import './AchivementsItem.scss'

function AchivementsItem({name, cover}) {
    return (  
        <li className="list__achivement">
            <div className="achivement__content">
                <img src={cover} alt="Изображение достижения" className='achivement__cover' />
            </div>
            <div className="achivement__text">
                    <h4 className="achivement__title">{name}</h4>
                </div>
        </li>
    );
}

export default AchivementsItem;