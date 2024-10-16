import React from 'react';
import './PopularList.scss'
import PopularItem from './PopularItem/PopularItem';

type PopularType = {
    name: string,
    desc: string,
    cover: any
}

type PopularListProps = {
    title:string,
    games: PopularType[]
}

function PopularList({title, games}: PopularListProps) {
    return ( 
        <section className="popular-list">
            <h3 className="popular-list__header">{title}</h3>
            <ul className="popular-list__body">
                {games.map((game) => <PopularItem name={game.name} desc={game.desc} cover={game.cover} key={game.name}/>)}
            </ul>
            
        </section>
     );
}

export default PopularList;