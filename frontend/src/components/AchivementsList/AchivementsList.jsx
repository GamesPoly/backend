import React from 'react';
import { Link } from 'react-router-dom';
import './AchivementsList.scss'
import AchivementsItem from './AchivementsItem/AchivementsItem';

function AchivementsList({title, achivements}) {
    return ( 
        <section className="achivements__list">
            <div className="list__head">
                <h3 className="achivements__header">{title}</h3>
                <Link to="/" className="achivements__show">
                    Показать все
                </Link>
            </div>
            <ul className="list__body">
                {achivements.map((achivement) => <AchivementsItem name={achivement.name} cover={achivement.cover} key={achivement.name}/>)}
            </ul>
            
        </section>
     );
}

export default AchivementsList;