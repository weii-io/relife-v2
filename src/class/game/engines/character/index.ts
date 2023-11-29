import { Character } from "../../../character";
import Chance from "chance";
import { Health } from "../../../health/health";
import { Occupation } from "../../../occupation";
import { GENDER } from "../../../../type";

const chance = new Chance();

class CharacterEngine {
  generateNPC() {}
  removeNPC() {}

  generateParent(lastName: string) {
    // randomly generate 0, 1 or 2 parent for player
    const randomness = Math.floor(Math.random() * 3);
    switch (randomness) {
      case 0:
        return [];
      case 1:
        const gender = chance.gender() as GENDER;
        const parent = new Character({
          age: chance.age({ type: "adult" }),
          gender: gender,
          health: new Health({
            mentalHealth: chance.integer({ min: 50, max: 85 }),
            physicalHealth: chance.integer({ min: 50, max: 85 }),
          }),
          money: 0,
          name: `${chance.first({ gender: gender })} ${lastName}`,
          occupation: new Occupation(
            chance.profession(),
            chance.integer({ min: 10000, max: 500000 })
          ),
        });
        return [parent];
      case 2:
        const MIN_AGE = 22;
        const AGE_GAP = 10;
        const father = new Character({
          age: chance.integer({
            min: MIN_AGE,
            max: MIN_AGE + AGE_GAP,
          }),
          gender: "male",
          health: new Health({
            mentalHealth: chance.integer({ min: 50, max: 85 }),
            physicalHealth: chance.integer({ min: 50, max: 85 }),
          }),
          money: 0,
          name: `${chance.first({ gender: "male" })} ${lastName}`,
          occupation: new Occupation(
            chance.profession(),
            chance.integer({ min: 10000, max: 500000 })
          ),
        });
        const mother = new Character({
          age: chance.integer({
            min: MIN_AGE,
            max: MIN_AGE + AGE_GAP,
          }),
          gender: "female",
          health: new Health({
            mentalHealth: chance.integer({ min: 50, max: 85 }),
            physicalHealth: chance.integer({ min: 50, max: 85 }),
          }),
          money: 0,
          name: `${chance.first({ gender: "female" })} ${lastName}`,
          occupation: new Occupation(
            chance.profession(),
            chance.integer({ min: 10000, max: 500000 })
          ),
        });
        return [father, mother];
      default:
        return [];
    }
  }
}

export { CharacterEngine };
