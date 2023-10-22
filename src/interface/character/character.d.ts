import { Health } from "../../class/health/health";
import { GENDER } from "../../type";

export interface ICharacter {
  name: string;
  age: number;
  gender: GENDER;
  // TODO: expand occupation into class
  occupation: string | null;
  health: Health;
  money: number;
}
