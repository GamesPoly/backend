import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero';
import Collection from './Collection/Collection';
import Genre from './Genre/Genre';
import Functions from './Functions/Functions';
const Home = () => {
    return (
        <main className='home__wrapper'>
            <Hero />
            <Collection />
            <Genre />
            <Functions />
        </main>
    );
};

export default Home;