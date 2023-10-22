import { ICharacter } from "../../interface/character";
import { GENDER } from "../../type";
import { Health } from "../health/health";
import { Occupation } from "../occupation";

export class Character implements ICharacter {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER,
    protected _occupation: Occupation | null = null,
    protected _health: Health = new Health(100, 100),
    protected _money = 0
  ) {}

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
  get gender(): GENDER {
    return this._gender;
  }

  get occupation(): Occupation | null {
    return this._occupation;
  }

  get health() {
    return this._health;
  }

  get money(): number {
    return this._money;
  }

  serializable() {}
}
