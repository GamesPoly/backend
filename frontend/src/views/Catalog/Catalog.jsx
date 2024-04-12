import React, {useEffect} from 'react';
import './Catalog.scss'
import AdSlider from './AdSlider/AdSlider';
import AsideSettings from './AsideSettings/AsideSettings';
import GamesList from './GamesList/GamesList';
import cover1 from '@assets/cover-game4.png'
import cover2 from '@assets/cover-game3.png'
import axios from "axios";

function Catalog() {


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

    useEffect(() => {
        async function getGame() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/games/1');
                console.log(response.data);
            } catch (error) {
                console.error(error.data);
            }
        }

        const data = getGame();
    }, [])
    return (  
        <main className="catalog">
            <AsideSettings />
            <div className="catalog__wrapper">
                <AdSlider />
                {gamesCollections.map((list) => <GamesList title={list.title} games={list.games} key={list.title}/>)}
            </div>
        </main>
    );
}

export default Catalog;
