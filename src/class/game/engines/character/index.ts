import CircularJson from "circular-json";

class CharacterEngine {
  constructor() {}

  generateNPC() {}
  removeNPC() {}

  serialize() {
    return CircularJson.stringify(this);
  }
}

export { CharacterEngine };
