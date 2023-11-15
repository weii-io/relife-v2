import CircularJson from "circular-json";

class WorldEngine {
  constructor() {}

  generateWorld() {}

  serialize() {
    return CircularJson.stringify(this);
  }
}

export { WorldEngine };
