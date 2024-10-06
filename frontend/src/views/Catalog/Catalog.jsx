import React, { useEffect, useState, Suspense } from "react";
import "./Catalog.scss";
import AdSlider from "./components/AdSlider/AdSlider.jsx";
import AsideSettings from "./components/AsideSettings/AsideSettings.jsx";
import GamesList from "./components/GamesList/GamesList.jsx";
import SkeletonSlider from "./components/skeletons/SkeletonSlider/SkeletonSlider.jsx";
import SkeletonGamesList from "./components/skeletons/SkeletonGamesList/SkeletonGamesList.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

function Catalog() {
  const [gamesCollections, setGamesCollections] = useState([]);
  const [adSliderGames, setAdSliderGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/games/?_limit=23");
        const data = await response.json();

        const adSliderGames = data.slice(0, 5);

        const remainingGames = data.slice(5);
        const gamesPerGroup = Math.ceil(remainingGames.length / 3);

        const grouped = [
          {
            title: "Лучшие представители своих жанров",
            games: remainingGames.slice(0, gamesPerGroup),
          },
          {
            title: "Самое популярное в последнее время",
            games: remainingGames.slice(gamesPerGroup, 2 * gamesPerGroup),
          },
          {
            title: "Специально для тебя",
            games: remainingGames.slice(2 * gamesPerGroup),
          },
        ];

        setAdSliderGames(adSliderGames);
        setGamesCollections(grouped);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="catalog">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <AsideSettings />
        <div className="catalog__wrapper">
          {!isLoading ? <AdSlider games={adSliderGames} /> : <SkeletonSlider />}

          {!isLoading ? (
            gamesCollections.map((list) => (
              <GamesList
                title={list.title}
                games={list.games}
                key={list.title}
              />
            ))
          ) : (
            <SkeletonGamesList />
          )}
        </div>
      </SkeletonTheme>
    </main>
  );
}

export default Catalog;
