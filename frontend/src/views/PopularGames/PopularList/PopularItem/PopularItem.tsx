import React from 'react';
import './PopularItem.scss'

type PopularItemsProps = {
    name: string,
    desc: string,
    cover: any
}

function PopularItem({name, desc, cover}: PopularItemsProps) {

    const maxLength = 25;

    const truncate = (text: string) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (  
        <li className="popular-list__card">
            <img src={cover} alt="Изображение игры" className='popular-list__card-cover' />
            <div className="popular-list__card-text">
                <h4 className="popular-list__card-title">{name}</h4>
                <p className="popular-list__card-desc">{truncate(desc)}</p>
            </div>
        </li>
    );
}

export default PopularItem;