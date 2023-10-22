export class Occupation {
  constructor(protected _title: string, protected _salary: number) {}

  get title() {
    return this._title;
  }

  get salary() {
    return this._salary;
  }
}
