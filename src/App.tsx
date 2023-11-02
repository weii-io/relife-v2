import React from "react";
import "./App.css";
import { Game } from "./class/game";
import { WorldEngine } from "./class/game/engines/world";
import { CharacterEngine } from "./class/game/engines/character";
import { PlayerEngine } from "./class/game/engines/player";
import { Player } from "./class/player";
import { removeUnderscorePrefix } from "./utils";

function App() {
  const [game] = React.useState(new Game());

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await game.storage.init();
      const engines = ["characterEngine", "playerEngine", "worldEngine"];
      const storedData = await Promise.all(
        engines.map(async (engine) => {
          return game.storage.read("gameState", engine);
        })
      );
      if (storedData.every((data) => data === null)) {
        // save data here
        await Promise.all([
          game.storage.write(
            "gameState",
            "characterEngine",
            game.characterEngine
          ),
          game.storage.write("gameState", "playerEngine", game.playerEngine),
          game.storage.write("gameState", "worldEngine", game.worldEngine),
        ]);
      } else {
        const _playerEngine = removeUnderscorePrefix(
          await game.storage.read("gameState", "playerEngine")
        ) as PlayerEngine;
        // const _worldEngine = removeUnderscorePrefix(
        //   await game.storage.read("gameState", "worldEngine")
        // );
        // const _characterEngine = removeUnderscorePrefix(
        //   await game.storage.read("gameState", "characterEngine")
        // );

        // // read from saved data
        const worldEngine = new WorldEngine();
        const characterEngine = new CharacterEngine();
        const playerEngine = new PlayerEngine(new Player(_playerEngine.player));

        game.worldEngine = worldEngine;
        game.characterEngine = characterEngine;
        game.playerEngine = playerEngine;
      }
      setLoading(false);
    })();
  }, [game]);

  if (loading) return <div>Loading...</div>;
  else return <div>{JSON.stringify(game)}</div>;
}

export default App;
