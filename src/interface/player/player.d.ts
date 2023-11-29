import { ICharacter } from "../character";

export interface IPlayer extends Partial<ICharacter> {
  inventory: string[];
}
