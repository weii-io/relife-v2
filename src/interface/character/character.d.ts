import { Health } from "../../class/health/health";
import { Occupation } from "../../class/occupation";
import { GENDER } from "../../type";

export interface ICharacter {
  name: string;
  age: number;
  gender: GENDER;
  occupation: Occupation | null;
  health: Health;
  money: number;
}
