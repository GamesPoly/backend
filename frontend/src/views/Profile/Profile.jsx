import React, { useEffect } from 'react';
import './Profile.scss';
import AboutUserContainer from './AboutUserContainer/AboutUserContainer';
import GamesList from '@components/GamesList/GamesList';
import AchivementsList from '@components/AchivementsList/AchivementsList';
import cover1 from '@assets/cover-game4.png';
import achCover1 from '@assets/cup-icon.png';
import achCover2 from '@assets/swords-icon.png';


function Profile() {
    
    const gamesCollections = [
        {
            title: 'Мои игры',
            games: [
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                }
            ]
        },
        {
            title: 'Избранное',
            games: [
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                },
                {
                    name: 'Simulation 23/3',
                    desc: 'Платформер-головоломка с уровнями на логику и смекалку. Требует тщательного планирования действий, чтобы преодолевать препятствия и решать головоломки.',
                    cover: cover1
                }
            ]
        }
    ];

    const achivementsCollections = [
        {
            title: 'Достижения',
            achivements: [
                {
                    name: 'Лучший разработчик',
                    cover: achCover1
                },
                {
                    name: 'Лучший стратег',
                    cover: achCover2
                },
                {
                    name: 'Лучший разработчик',
                    cover: achCover1
                },
                {
                    name: 'Лучший стратег',
                    cover: achCover2
                },
                {
                    name: 'Лучший разработчик',
                    cover: achCover1
                },
                {
                    name: 'Лучший стратег',
                    cover: achCover2
                }
            ]
        }
    ];

    return (
        <main className="profile__wrapper">
            <AboutUserContainer />
            <div className="profile__wrapper">
                {gamesCollections.map((list) => (
                    <GamesList title={list.title} games={list.games} key={list.title}/>
                ))}
            
                {achivementsCollections.map((list) => (
                    <AchivementsList title={list.title} achivements={list.achivements} key={list.title}/>
                ))}
            </div>
        </main>
        );
    }


export default Profile;