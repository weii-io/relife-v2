import { GENDER } from "../../type";
import { Health } from "../health/health";
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

  protected _characterEngine: CharacterEngine | null = null;
  protected _playerEngine: PlayerEngine | null = null;
  protected _worldEngine: WorldEngine | null = null;

  constructor() {
    this._characterEngine = new CharacterEngine();

    const PLAYER_GENDER = chance.gender().toLowerCase() as GENDER;
    const PLAYER_NAME = chance.name({ gender: PLAYER_GENDER });
    const PLAYER_HEALTH = new Health({
      physicalHealth: 100,
      mentalHealth: 100,
    });

    this._playerEngine = new PlayerEngine(
      new Player({
        name: PLAYER_NAME,
        age: 0,
        gender: PLAYER_GENDER,
        occupation: undefined,
        health: PLAYER_HEALTH,
        money: 0,
        inventory: [],
      })
    );
    this._worldEngine = new WorldEngine();
  }

  get version() {
    return this._version;
  }

  get name() {
    return this._name;
  }

  get storage() {
    return this._storage;
  }

  get player() {
    return this.playerEngine.player as Player;
  }

  get worldEngine() {
    return this._worldEngine as WorldEngine;
  }

  get characterEngine() {
    return this._characterEngine as CharacterEngine;
  }

  get playerEngine() {
    return this._playerEngine as PlayerEngine;
  }

  set worldEngine(value: WorldEngine) {
    this.worldEngine = value;
  }

  set characterEngine(value: CharacterEngine) {
    this.characterEngine = value;
  }

  set playerEngine(value: PlayerEngine) {
    this.playerEngine = value;
  }
}
