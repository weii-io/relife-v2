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

  name() {
    return this._name;
  }

  age() {
    return this._age;
  }

  gender() {
    return this._gender;
  }

  occupation() {
    return this._occupation;
  }

  physical_health() {
    return this._physical_health;
  }

  mental_health() {
    return this._mental_health;
  }

  money() {
    return this._money;
  }
}
