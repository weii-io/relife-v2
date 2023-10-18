import { GENDER } from "../../type";
import { Character } from "../character";

export class Player extends Character {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER,
    // TODO: expand occupation into class
    protected _occupation: string,
    // TODO: expand physical health and mental health into health class
    protected _physical_health: number = 100,
    protected _mental_health: number = 100,
    protected _money: number = 0,
    protected _inventory: [] = []
  ) {
    super(
      _name,
      _age,
      _gender,
      _occupation,
      _physical_health,
      _mental_health,
      _money
    );
  }

  get inventory() {
    return this._inventory;
  }
}