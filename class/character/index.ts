import { GENDER } from "../../type";

export class Character {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER,
    // TODO: expand occupation into class
    protected _occupation: string,
    // TODO: expand physical health and mental health into health class
    protected _physical_health: number = 100,
    protected _mental_health: number = 100,
    protected _money: number = 0
  ) {}

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get gender() {
    return this._gender;
  }

  get occupation() {
    return this._occupation;
  }

  get physical_health() {
    return this._physical_health;
  }

  get mental_health() {
    return this._mental_health;
  }

  get money() {
    return this._money;
  }
}
