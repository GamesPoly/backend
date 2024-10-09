import React, { useState } from "react";
import "./GamesItem.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function GamesItem({ name, desc, imageUrl }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <li className="list__card">
      <div className="card__content">
        {!isLoaded && <Skeleton className="card__cover" />}
        <img
          src={imageUrl}
          alt={name}
          className="card__cover"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />

        <div className="card__text">
          <h4 className="card__title">{name || <Skeleton />}</h4>
          <p className="card__desc">{desc || <Skeleton count={10} />}</p>
        </div>
      </div>
    </li>
  );
}

export default GamesItem;
