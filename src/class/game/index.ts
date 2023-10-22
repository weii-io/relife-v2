import { GENDER } from "../../type";
import { Player } from "../player";
import { CharacterEngine } from "./engines/character";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";
import { GameStorage } from "./storage";
import Chance from "chance";

const chance = new Chance();

export class Game {
  protected _version: number = 2;
  protected _name = "relife";
  protected _storage: GameStorage = new GameStorage(this.name, this.version);

  protected _character_engine: CharacterEngine | null = null;
  protected _player_engine: PlayerEngine | null = null;
  protected _world_engine: WorldEngine | null = null;

  protected _player: Player | null;

  constructor() {
    this._character_engine = new CharacterEngine();

    const PLAYER_GENDER = chance.gender().toLowerCase() as GENDER;

    this._player = new Player(
      chance.name({ gender: PLAYER_GENDER }),
      0,
      PLAYER_GENDER,
      null,
      100,
      100,
      0,
      []
    );
    this._player_engine = new PlayerEngine(this.player);
    this._world_engine = new WorldEngine();
  }

  get version() {
    return this._version;
  }

  get name() {
    return this._name;
  }

  get player() {
    return this._player as Player;
  }

  get player_engine() {
    return this._player_engine as PlayerEngine;
  }
}
