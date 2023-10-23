import { ICharacter } from "../../interface/character";
import { GENDER } from "../../type";
import { Health } from "../health/health";
import { Occupation } from "../occupation";

export class Character implements ICharacter {
  protected _name?: string = undefined;
  protected _age?: number = undefined;
  protected _gender?: GENDER = undefined;
  protected _occupation?: Occupation = undefined;
  protected _health?: Health = new Health({
    physicalHealth: 100,
    mentalHealth: 100,
  });
  protected _money? = 0;

  constructor(properties: ICharacter) {
    this._name = properties.name;
    this._age = properties.age;
    this._gender = properties.gender;
    this._occupation = properties.occupation;
    this._health = properties.health;
    this._money = properties.money;
  }

  get name() {
    return this._name as string;
  }

  get age() {
    return this._age as number;
  }
  get gender(): GENDER {
    return this._gender as GENDER;
  }

  get occupation(): Occupation {
    return this._occupation as Occupation;
  }

  get health() {
    return this._health as Health;
  }

  get money(): number {
    return this._money as number;
  }
}
