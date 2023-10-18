import { CharacterEngine } from "./engines/character";
import { PlayerEngine } from "./engines/player";
import { WorldEngine } from "./engines/world";

export class Game {
  constructor(
    protected _character_engine: CharacterEngine,
    protected _player_engine: PlayerEngine,
    protected _world_engine: WorldEngine
  ) {}
}
