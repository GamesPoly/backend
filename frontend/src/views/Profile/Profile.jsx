import React, { useEffect } from 'react';
import './Profile.scss'
import AboutUserContainer from './AboutUserContainer/AboutUserContainer';
import GamesList from '@components/GamesList/GamesList';
import AchivementsList from './AchivementsList/AchivementsList';
import cover1 from '@assets/cover-game4.png'


function Profile() {
    const gamesCollections = [{
        title: 'Мои игры',
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
        title: 'Избранное',
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
    return ( 
        <main className="profile__wrapper">
            <AboutUserContainer />
            <div className="profile__wrapper">
                {gamesCollections.map((list) => <GamesList title={list.title} games={list.games} key={list.title}/>)}
            </div>
            
        </main>
     );
}

export default Profile;