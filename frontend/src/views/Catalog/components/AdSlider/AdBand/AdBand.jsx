import React from "react";
import "./AdBand.scss";
import { Link } from "react-router-dom";

function AdBand({ gameAdObj }) {
  return (
    <Link to="#" className="ad-band">
      <img src={gameAdObj.image} alt="" className="ad-band__cover" />
      <div className="ad-band__info">
        <h3 className="ad-band__title">{gameAdObj.name}</h3>
        <p className="ad-band__desc">{gameAdObj.desc}</p>
        <div className="ad-band__tags">
          <p className="ad-band__ganre">{gameAdObj.ganre}</p>
          {gameAdObj.tags.map((item, index) => (
            <p className="ad-band__tag" key={index}>
              #{item}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default AdBand;
