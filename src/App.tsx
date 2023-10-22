import React from "react";
import "./App.css";
import { Game } from "./class/game";

function App() {
  const game = new Game();

  React.useEffect(() => {
    console.log(game);
  }, []);

  return <div></div>;
}

export default App;
