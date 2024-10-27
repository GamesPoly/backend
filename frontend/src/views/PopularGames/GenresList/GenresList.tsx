import React, { useEffect, useState } from 'react';
import './GenresList.scss';
import GenresItem from './GenresItem/GenresItem';

type Popular = {
    name: string,
    cover: any
};

type GenresListProps = {
    title: string,
    genres: Popular[]
};

function GenresList({ title, genres }: GenresListProps) {
    const [showAll, setShowAll] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1350);

    useEffect(() => {
        const handleResize = () => {
            const largeScreen = window.innerWidth >= 1350;
            setIsLargeScreen(largeScreen);

            if (largeScreen) {
                setShowAll(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleShowAll = () => setShowAll(!showAll);

    const displayedGenres = isLargeScreen || showAll ? genres : genres.slice(0, 3);

    return (
        <section className="genres-list">
            <div className="genres-list__header">
                <h3 className="genres-list__title">{title}</h3>
                {!isLargeScreen && genres.length > 3 && (
                    <button className="genres-list__show-button" onClick={toggleShowAll}>
                        {showAll ? 'Скрыть' : 'Показать все'}
                    </button>
                )}
            </div>
            
            <ul className="genres-list__body">
                {displayedGenres.map((genre) => (
                    <GenresItem name={genre.name} cover={genre.cover} key={genre.name} />
                ))}
            </ul>
        </section>
    );
}

export default GenresList;
