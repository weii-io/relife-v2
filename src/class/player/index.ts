import { Serializable } from "../../decorator/serializable.decorator";
import { IPlayer } from "../../interface/player";
import { GENDER } from "../../type";
import { Character } from "../character";
import { Health } from "../health/health";

@Serializable
export class Player extends Character implements IPlayer {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER,
    // TODO: expand occupation into class
    protected _occupation: string | null,
    protected _health: Health,
    protected _money: number = 0,
    protected _inventory: string[] = []
  ) {
    super(_name, _age, _gender, _occupation, _health, _money);
  }

  get inventory() {
    return this._inventory;
  }
}
