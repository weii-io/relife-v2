import { Character } from "../../character";

export class Edge {
  constructor(protected to: Character, protected relationship: String) {}
}
