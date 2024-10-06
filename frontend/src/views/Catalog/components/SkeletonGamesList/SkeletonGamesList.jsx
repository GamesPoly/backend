import React from "react";
import { Link } from "react-router-dom";
import "../GamesList/GamesList.scss";
import GamesItem from "../../GamesList/GamesItem/GamesItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonGamesList({ title }) {
  return (
    <section className="games__list">
      <div className="list__head">
        <h3 className="games__header">
          {" "}
          {title || <Skeleton width={"600px"} />}{" "}
        </h3>
        <Link to="/" className="games__show">
          <Skeleton />
        </Link>
      </div>
      <ul className="list__body">
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
        <GamesItem />
      </ul>
    </section>
  );
}

export default SkeletonGamesList;
