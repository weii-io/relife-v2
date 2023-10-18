import { GENDER } from "../../type";

export class Character {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER
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
}
