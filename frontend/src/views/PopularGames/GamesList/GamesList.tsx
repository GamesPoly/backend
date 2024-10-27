import React, { useEffect, useState } from 'react';
import './GamesList.scss'
import GamesItem from './GamesItem/GamesItem';

type Popular = {
    name: string,
    desc: string,
    cover: any
}

type GamesListProps = {
    title:string,
    games: Popular[],
    size: 'small' | 'big'
}

function GamesList({title, games, size}: GamesListProps) {
    const [showAll, setShowAll] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1360);

    useEffect(() => {
        const handleResize = () => {
            const largeScreen = window.innerWidth >= 1360;
            setIsLargeScreen(largeScreen);

            if (largeScreen) {
                setShowAll(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleShowAll = () => setShowAll(!showAll);

    const displayedGames = isLargeScreen || showAll ? games : games.slice(0, 3);
    

    return ( 
        <section className="games-list">
            <div className="games-list__header">
                <h3 className="games-list__title">{title}</h3>
                {!isLargeScreen && games.length > 3 && (
                    <button className="games-list__show-button" onClick={toggleShowAll}>
                        {showAll ? 'Скрыть' : 'Показать все'}
                    </button>
                )}
            </div>
            <ul className="games-list__body">
                {displayedGames.map((game) => (
                    <GamesItem name={game.name} desc={game.desc} cover={game.cover} key={game.name} size={size} />
                ))}
            </ul>
            
        </section>
     );
}

export default GamesList;