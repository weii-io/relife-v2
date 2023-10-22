import { Player } from "../../../player";

export class PlayerEngine {
  constructor(protected _player: Player) {}

  get player() {
    return this._player;
  }

  createPlayer() {}
  loadPlayer() {}
  savePlayer() {}
}
