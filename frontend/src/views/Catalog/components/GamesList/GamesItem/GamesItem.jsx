import React from "react";
import "./GamesItem.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function GamesItem({ name, desc, imageUrl }) {
  return (
    <li className="list__card">
      <div className="card__content">
        {imageUrl ? (
          <img src={imageUrl} alt="Изображение игры" className="card__cover" />
        ) : (
          <Skeleton className="card__cover" />
        )}

        <div className="card__text">
          <h4 className="card__title">{name || <Skeleton />}</h4>
          <p className="card__desc">{desc || <Skeleton count={10} />}</p>
        </div>
      </div>
    </li>
  );
}

export default GamesItem;
