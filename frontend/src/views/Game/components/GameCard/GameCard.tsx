import React from "react";
import GameSlider from "../GamesSlider/GamesSlider";

type GameCardProps = {
    id: string;
};

const GameCard: React.FC<GameCardProps> = ({ id }) => {
  return (
    <div>
      <h1>Astrea</h1>
      <GameSlider/>
    </div>
  );
};

export default GameCard;
