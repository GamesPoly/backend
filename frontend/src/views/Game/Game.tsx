import React from "react";
import { useParams } from "react-router-dom";
import GameCard from "./components/GameCard/GameCard";
import GameDescription from "./components/GameDescription/GameDescription";
import Reviews from "./components/Reviews/Reviews";

type GameParams = {
  id: string;
};

const Game: React.FC = () => {
  const { id } = useParams<GameParams>();

  return <main className="game">
    <div className="game__wrapper">{
    id ? <>
  <GameCard id={id} />
  <GameDescription/>
  <Reviews/>
  </> : <p>No game selected</p>}
  </div>
  </main>;
};

export default Game;
