import React from "react";
import "./AsideSettings.scss";
import starMini1 from "@assets/decorate-star-mini.svg";
import starMini2 from "@assets/decorate-star-mini2.svg";
import { useCatalogFilters } from "@/context/CatalogFiltersProvider.jsx";
import { genres, sets } from "./constants/genresAndSets";

function AsideSettings() {
  const { selectedGenre, selectedSet, changeSelectedGenre, changeSelectedSet } =
    useCatalogFilters();

  return (
    <aside className="aside-settings">
      <div className="aside-settings__lists">
        <ul className="aside-settings__list">
          <img src={starMini1} alt="" className="aside-settings__icon" />
          <li className="aside-settings__item">
            <h5
              className={
                selectedGenre === "all"
                  ? "aside-settings__title"
                  : "aside-settings__link"
              }
              onClick={() => changeSelectedGenre("all")}
            >
              Жанры
            </h5>
          </li>
          {genres.map((item, index) => (
            <li
              className="aside-settings__item"
              key={index}
              onClick={() => changeSelectedGenre(item.filterValue)}
            >
              <span
                className={
                  selectedGenre === item.filterValue
                    ? "aside-settings__title"
                    : "aside-settings__link"
                }
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
        <ul className="aside-settings__list">
          <img src={starMini2} alt="" className="aside-settings__icon" />
          <li className="aside-settings__item">
            <h5
              className={
                selectedSet === "all"
                  ? "aside-settings__title"
                  : "aside-settings__link"
              }
              onClick={() => changeSelectedSet("all")}
            >
              Наборы
            </h5>
          </li>
          {sets.map((item, index) => (
            <li
              className="aside-settings__item"
              key={index}
              onClick={() => changeSelectedSet(item.filterValue)}
            >
              <span
                className={
                  selectedSet === item.filterValue
                    ? "aside-settings__title"
                    : "aside-settings__link"
                }
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default AsideSettings;
