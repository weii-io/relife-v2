import { Health } from "../../class/health/health";
import { Occupation } from "../../class/occupation";
import { CHARACTER_ROLE, GENDER } from "../../type";

export interface ICharacter {
  name: string;
  age: number;
  gender: GENDER;
  occupation?: Occupation;
  health: Health;
  money: number;
  id: string;
  role: CHARACTER_ROLE;
}
