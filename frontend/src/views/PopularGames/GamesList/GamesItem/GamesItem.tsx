import React from 'react';
import './GamesItem.scss'

type PopularItemsProps = {
    name: string,
    desc: string,
    cover: any,
    size : string,
}

function GamesItem({name, desc, cover , size}: PopularItemsProps) {

    const maxLength = 25;

    const truncate = (text: string) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    const gamesListCard = `games-list__card games-list__card--${size}`;
    
    return (  
        <li className={gamesListCard}>
            <img src={cover} alt="Изображение игры" className='games-list__card-cover' />
            <div className="games-list__card-text">
                <h4 className="games-list__card-title">{name}</h4>
                <p className="games-list__card-desc">{truncate(desc)}</p>
            </div>
        </li>
    );
}

export default GamesItem;