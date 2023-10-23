import { IPlayer } from "../../interface/player";
import { Character } from "../character";

export class Player extends Character implements IPlayer {
  protected _inventory: string[];

  constructor(properties: IPlayer) {
    super(properties);
    this._inventory = properties.inventory;
  }

  get inventory() {
    return this._inventory;
  }
}
