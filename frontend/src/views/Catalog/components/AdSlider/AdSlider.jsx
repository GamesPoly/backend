import React from "react";
import "./AdSlider.scss";
import AdBanner from "./components/AdBanner/AdBanner";
import AdBand from "./components/AdBand/AdBand";

function AdSlider({ games }) {
  return (
    <section className="ads-slider">
      <AdBanner gameAdObj={games[0]} />
      <ul className="ads-slider__list">
        {games.slice(1).map((game) => (
          <li className="ads-slider__item" key={game.id}>
            <AdBand gameAdObj={game} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdSlider;
