import { Player } from "../../../player";
import CircularJson from "circular-json";

class PlayerEngine {
  constructor(protected _player: Player) {}

  get player() {
    return this._player;
  }

  createPlayer() {}
  loadPlayer() {}
  savePlayer() {}

  serialize() {
    return CircularJson.stringify(this);
  }
}

export { PlayerEngine };
