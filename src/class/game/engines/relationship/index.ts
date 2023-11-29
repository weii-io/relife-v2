import { RelationshipGraph } from "../../../data-structures/relationship-graph/RelationshipGraph";

class RelationshipEngine {
  protected _relationshipGraph: RelationshipGraph = new RelationshipGraph();

  constructor(relationshipGraph: RelationshipGraph | null) {
    if (relationshipGraph) this._relationshipGraph = relationshipGraph;
  }

  get relationshipGraph() {
    return this._relationshipGraph;
  }
}

export { RelationshipEngine };
