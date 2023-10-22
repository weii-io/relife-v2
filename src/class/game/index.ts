import { Player } from "../player";
import { CharacterEngine } from "./engines/character";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";
import { GameStorage } from "./storage";

export class Game {
  protected _version: number = 2;
  protected _name = "relife";
  protected _storage: GameStorage = new GameStorage(this.name, this.version);

  constructor(
    protected _character_engine: CharacterEngine = new CharacterEngine(),
    protected _player_engine: PlayerEngine = new PlayerEngine(
      new Player(
        // TODO: will generate random name
        "John Doe",
        // TODO: will generate random age,
        0,
        // TODO: will generate random gender,
        "male",
        // TODO: will generate random occupation,
        null,
        // TODO: will generate random physical health,
        100,
        // TODO: will generate random mental health
        100,
        //  TODO: will generate random money,
        0,
        // TODO: will generate empty inventory
        []
      )
    ),
    protected _world_engine: WorldEngine = new WorldEngine()
  ) {}

  get version() {
    return this._version;
  }

  get name() {
    return this._name;
  }
}
