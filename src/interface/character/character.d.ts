import { GENDER } from "../../src/type";

export interface ICharacter {
  name: string;
  age: number;
  gender: GENDER;
  // TODO: expand occupation into class
  occupation: string | null;
  // TODO: expand physical health and mental health into health class
  physical_health: number;
  mental_health: number;
  money: number;
}
