import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './GamesList.scss'
import GamesItem from './GamesItem/GamesItem';
import axios from "axios";

function GamesList({title, games}) {
    useEffect(() => {
        async function getGame() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/games/1');
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

        const data = getGame();
    }, [])

    return ( 
        <section className="games__list">
            <div className="list__head">
                <h3 className="games__header">{title}</h3>
                <Link to="/" className="games__show">
                    Показать все
                </Link>
            </div>
            <ul className="list__body">
                {games.map((game) => <GamesItem name={game.name} desc={game.desc} cover={game.cover} key={game.name}/>)}
            </ul>
            
        </section>
     );
}

export default GamesList;