import CircularJson from "circular-json";
export function Serializable(target: Function) {
  target.prototype.serialize = function () {
    // Empty implementation
    return CircularJson.stringify(target);
  };
}
