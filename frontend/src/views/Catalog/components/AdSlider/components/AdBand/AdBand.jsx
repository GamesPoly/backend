import React from "react";
import "./AdBand.scss";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AdBand({ gameAdObj }) {
  return (
    <Link to="#" className="ad-band">
      {gameAdObj.imageUrl ? (
        <img
          src={gameAdObj.imageUrl}
          alt={gameAdObj.name}
          className="ad-band__cover"
        />
      ) : (
        <Skeleton className="ad-band__cover" />
      )}
      <div className="ad-band__info">
        <h3 className="ad-band__title">{gameAdObj.name || <Skeleton />}</h3>
        <p className="ad-band__desc">
          {gameAdObj.desc || <Skeleton count={2} />}
        </p>
        <div className="ad-band__tags">
          <p className="ad-band__ganre">
            {gameAdObj.ganre || <Skeleton width={"90px"} />}
          </p>
          {gameAdObj.tags ? (
            gameAdObj.tags.map((item, index) => (
              <p className="ad-band__tag" key={index}>
                #{item}
              </p>
            ))
          ) : (
            <p className="ad-band__tag">
              <Skeleton width={"90px"} />
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default AdBand;
