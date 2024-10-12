import React from 'react';
import './PopularGames.scss'
import GameBanner from './GameBanner/GameBanner';
import cover1 from '@assets/cover-game4.png'
import PopularList from './PopularList/PopularList';

const gamesCollections = [{
    title: 'Лучшие представители своих жанров',
    games: [
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        }
    ]
}, 
{
    title: 'Самое популярное в последнее время',
    games: [
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        }
    ]
}, 
{
    title: 'Специально для тебя',
    games: [
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation 23/3',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        }
    ]
}]

function PopularGames() {

    
    return (  
        <main className="popular-games">
            <div className="popular-games__wrapper">
                <GameBanner />
                {gamesCollections.map((list) => <PopularList title={list.title} games={list.games} key={list.title}/>)}
            </div>
        </main>
    );
}

export default PopularGames;