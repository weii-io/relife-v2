import { Game } from "../class/game";
import { CharacterEngine } from "../class/game/engines/character";
import { PlayerEngine } from "../class/game/engines/player";
import React from "react";

export default function Home() {
  const game = new Game();

  React.useEffect(() => {
    console.log(game);
  }, []);

  return <div>Hello World</div>;
}
