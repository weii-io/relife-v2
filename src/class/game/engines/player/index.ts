import { Player } from "../../../player";

class PlayerEngine {
  constructor(protected _player: Player) {}

  get player() {
    return this._player;
  }

  load(player: Player) {
    this._player = player;
  }
}

export { PlayerEngine };
