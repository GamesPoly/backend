import React, { useState } from "react";
import "./AdBand.scss";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import type { Game } from "../../../../types/index";

type AdBandProps = {
  gameAdObj: Partial<Game>;
};
function AdBand({ gameAdObj }: AdBandProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/games/${gameAdObj.id}`} className="ad-band">
      {!isLoaded && <Skeleton className="ad-band__cover" />}
      <img
        src={gameAdObj.imageUrl}
        alt={gameAdObj.name}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "block" : "none" }}
        className="ad-band__cover"
      />
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
