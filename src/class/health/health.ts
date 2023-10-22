export class Health {
  constructor(
    protected _physicalHealth: number,
    protected _mentalHealth: number
  ) {}

  get physicalHealth() {
    return this._physicalHealth;
  }

  set physicalHealth(value: number) {
    this.physicalHealth = value;
  }

  get mentalHealth() {
    return this._physicalHealth;
  }

  set mentalHealth(value: number) {
    this.mentalHealth = value;
  }
}
