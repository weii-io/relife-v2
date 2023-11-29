import { Edge } from "./Edge";
import { Character } from "../../character";

export class RelationshipGraph {
  adjList = new Map<Character, Edge[]>();

  constructor(adjList?: Map<Character, Edge[]>) {
    if (adjList) {
      this.adjList = adjList;
    }
  }

  addRelationship(from: Character, to: Character, relationship: String) {
    this.adjList.get(from)?.push(new Edge(to, relationship));
    this.adjList.get(to)?.push(new Edge(from, relationship));
  }
}
