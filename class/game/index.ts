import { CharacterEngine } from "./engines/character";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";
import { GameStorage } from "./storage";

export class Game {
  protected _version: number = 2;
  protected _name = "relife";
  protected _storage: GameStorage = new GameStorage(this.name, this.version);

  constructor(
    protected _character_engine: CharacterEngine,
    protected _player_engine: PlayerEngine,
    protected _world_engine: WorldEngine
  ) {}

  get version() {
    return this._version;
  }

  get name() {
    return this._name;
  }
}
