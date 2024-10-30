import React from 'react';
import styles from './Home.module.scss';
import Hero from './Hero/Hero';
import Collection from './Collection/Collection';
import Genre from './Genre/Genre';
import Functions from './Functions/Functions';
const Home = () => {
    return (
        <main className={styles['home__wrapper']}>
            <Hero />
            <Collection />
            <Genre />
            <Functions />
        </main>
    );
};

export default Home;