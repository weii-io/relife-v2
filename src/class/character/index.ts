import { ICharacter } from "../../interface/character";
import { GENDER } from "../../type";
import { Health } from "../health/health";

export class Character implements ICharacter {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _gender: GENDER,
    protected _occupation: string | null = null,
    protected _health: Health = new Health(100, 100),
    protected _money = 0
  ) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
  get gender(): GENDER {
    return this._gender;
  }

  set gender(value: GENDER) {
    this._gender = value;
  }

  get occupation(): string | null {
    return this._occupation;
  }

  set occupation(value: string | null) {
    this._occupation = value;
  }

  get health() {
    return this._health;
  }

  set health(value: Health) {
    this.health = value;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  serializable() {}
}
