import { IHealth } from "../../interface/health";

export class Health implements IHealth {
  protected _physicalHealth?: number = undefined;
  protected _mentalHealth?: number = undefined;

  constructor(properties: IHealth) {
    this._physicalHealth = properties.physicalHealth;
    this._mentalHealth = properties.mentalHealth;
  }

  get physicalHealth() {
    return this._physicalHealth as number;
  }

  set physicalHealth(value: number) {
    this.physicalHealth = value;
  }

  get mentalHealth() {
    return this._physicalHealth as number;
  }

  set mentalHealth(value: number) {
    this.mentalHealth = value;
  }
}
