import { GENDER } from "../../type";
import { Character } from "../character";
import { Health } from "../health/health";
import { Occupation } from "../occupation";
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

    // generate player
    this._playerEngine = new PlayerEngine(
      new Player({
        name: PLAYER_NAME,
        age: 0,
        gender: PLAYER_GENDER,
        occupation: new Occupation("infant", 0),
        health: PLAYER_HEALTH,
        money: 0,
        inventory: [],
      })
    );
    this._worldEngine = new WorldEngine();
  }

  // will return a bunch of promise in order of fulfillment priority
  init() {
    const promises = [];
    // save player to db
    promises.push(
      this.storage.write("characters", this.player.id, this.player)
    );
    // TODO: create relationship and store relationship in database by id
    // idea: can store all characters in game using browser memory

    // create player's parent
    const parents = (this._characterEngine as CharacterEngine).generateParent(
      this.player.name.split(" ")[1]
    );
    // save player's parents to database
    parents.forEach((parent) =>
      promises.push(this.storage.write("characters", parent.id, parent))
    );

    return promises;
  }

  async load() {
    const data: any = {};
    // load characters from db
    const characters: Character[] = await this.storage.readAll("characters");
    if (characters.length > 0) data["characters"] = characters;

    return data;
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
    this._worldEngine = value;
  }

  set characterEngine(value: CharacterEngine) {
    this._characterEngine = value;
  }

  set playerEngine(value: PlayerEngine) {
    this._playerEngine = value;
  }
}
