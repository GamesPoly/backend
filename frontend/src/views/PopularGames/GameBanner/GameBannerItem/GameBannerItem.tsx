import React from "react";
import { Link } from "react-router-dom";
import "./GameBannerItem.scss"

type GameBannerItemProps = {
    game: {
        image: string;
        points: number;
        place: number;
        name: string;
        desc: string;
        tags: string[];
    };
};


function GameBannerItem( {game}: GameBannerItemProps) {
    return ( 
        <div className="game-banner-item">
            <div className="game-banner-item__image-container">
                <img className="game-banner-item__image" src={game.image} alt="Фото игры" />
            </div>
            <div className="game-banner-item__info">
                <div className="game-banner-item__header">
                    <h2 className="game-banner-item__title">{game.name}</h2>
                    <div className="game-banner-item__stats">
                        <p className="game-banner-item__points">{game.points} очков</p>
                        <p className="game-banner-item__place"><span>{game.place} место</span> MospolyJam 2023</p>
                    </div>
                </div>
                <div className="game-banner-item__body">
                    <p className="game-banner-item__desc">{game.desc}</p>
                    <div className="game-banner-item__tags">
                        {game.tags.map((item, index) => (
                            <p key={index}>#{item}</p>
                        ))}
                    </div>
                </div>
                <Link to="/populargames" className="game-banner-item__link">
                <p className="game-banner-item__more">Подробнее</p>
                <svg
                    className="game-banner-item__arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="none"
                >
                    <circle cx="25" cy="25" r="25" fill="#FF5731" />
                    <path
                    d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z"
                    fill="white"
                    />
                </svg>
                </Link>
            </div>
        </div>
     );
}

export default GameBannerItem;