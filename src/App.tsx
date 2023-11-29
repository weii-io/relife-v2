import React from "react";
import "./App.css";
import { Game } from "./class/game";
import { Player } from "./class/player";
import { removeUnderscorePrefix } from "./utils";
import { IGameData } from "./interface/game";
import { Character } from "./class/character";

function App() {
  const [game] = React.useState(new Game());

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await game.storage.init();
      const data: IGameData = await game.load();

      // data is empty
      if (Object.keys(data).length === 0) {
        await Promise.all(game.init());
      } else {
        // data is not empty
        // clean data
        data["characters"] = data.characters.map((_character: any) => {
          delete _character["id"];

          let character;
          if (_character._role === "npc")
            character = new Character(removeUnderscorePrefix(_character));
          else character = new Player(removeUnderscorePrefix(_character));
          return character;
        });
        const player = data.characters.filter(
          (character) => character.role === "player"
        )[0] as Player;

        // initialize existing player
        game.playerEngine.load(player);
      }

      setLoading(false);
    })();
  }, [game]);

  if (loading) return <div>Loading...</div>;
  else
    return (
      <div>
        <div>
          {/* player avatar */}
          <img
            src={`assets/player_avatar/age-${game.player.age}-${game.player.gender}.png`}
            alt="player-avatar"
            width={50}
            height={50}
          />
          <span>{game.player.name}</span>
        </div>
        <span>Age: {game.player.age} years</span>
        <div>I was born a {game.player.gender}.</div>
        <div>My name is {game.player.name}.</div>
      </div>
    );
}

export default App;
