import React from "react";
import { Link } from "react-router-dom";
import "./GamesList.scss";
import GamesItem from "./GamesItem/GamesItem";
import { useCatalogFilters } from "@/context/CatalogFiltersProvider.jsx";

function GamesList({ title, games }) {
  const { selectedGenre, selectedSet } = useCatalogFilters();

  return (
    <section className="games__list">
      {games.length > 0 ? ( /* Если есть игры по запросу */
        <>
          {title ? (
            <div className="list__head">
              <h3 className="games__header">{title}</h3>
              <Link
                to="/"
                className="games__show"
                style={{
                  display: selectedGenre === selectedSet ? "block" : "none",
                }} /* Выполнятья только в одном случает: оба === "all" */
              >
                Показать все
              </Link>
            </div>
          ) : null}
          <ul className="list__body">
            {games.map((game) => (
              <GamesItem
                name={game.name}
                desc={game.desc}
                imageUrl={game.imageUrl}
                key={game.id}
              />
            ))}
          </ul>
        </>
      ) : ( /* Если нет игр по запросу */
        <div>Нет доступных игр по выбранным фильтрам</div>
      )}
    </section>
  );
}

export default GamesList;
