import React from "react";
import "./App.css";
import { Game } from "./class/game";
import { WorldEngine } from "./class/game/engines/world";
import { CharacterEngine } from "./class/game/engines/character";
import { PlayerEngine } from "./class/game/engines/player";
import { Player } from "./class/player";

function App() {
  const [game] = React.useState(new Game());

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      await game.storage.init();
      const engines = ["characterEngine", "playerEngine", "worldEngine"];
      const storedData = await Promise.all(
        engines.map(async (engine) => {
          return game.storage.read("gameState", engine);
        })
      );
      setLoading(true);
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
        const _playerEngine = await game.storage.read(
          "gameState",
          "playerEngine"
        );
        const _worldEngine = await game.storage.read(
          "gameState",
          "worldEngine"
        );
        const _characterEngine = await game.storage.read(
          "gameState",
          "characterEngine"
        );

        console.log(_playerEngine);

        // // read from saved data
        // const worldEngine = new WorldEngine();
        // const characterEngine = new CharacterEngine();
        // const playerEngine = new PlayerEngine(new Player());
      }
      setLoading(false);
    })();
  }, [game]);

  if (loading) return <div>Loading...</div>;
  else return <div></div>;
}

export default App;
