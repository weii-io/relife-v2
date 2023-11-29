import { Character } from "../../../character";
import Chance from "chance";
import { Health } from "../../../health/health";
import { Occupation } from "../../../occupation";
import { GENDER } from "../../../../type";

const chance = new Chance();

class CharacterEngine {
  generateNPC() {}
  removeNPC() {}

  private createParent(gender: GENDER, age: number, lastName: string) {
    const MIN_HEALTH = 50;
    const MAX_HEALTH = 85;
    const MIN_SALARY = 10000;
    const MAX_SALARY = 500000;
    return new Character({
      age: age,
      gender: gender,
      health: new Health({
        mentalHealth: chance.integer({ min: MIN_HEALTH, max: MAX_HEALTH }),
        physicalHealth: chance.integer({ min: MIN_HEALTH, max: MAX_HEALTH }),
      }),
      money: 0,
      name: `${chance.first({ gender: gender })} ${lastName}`,
      occupation: new Occupation(
        chance.profession(),
        chance.integer({ min: MIN_SALARY, max: MAX_SALARY })
      ),
    });
  }

  generateParent(lastName: string): Character[] {
    const MIN_AGE = 22;
    const AGE_GAP = 10;

    const numParents = Math.floor(Math.random() * 3); // 0, 1, or 2
    const parents: Character[] = [];
    if (numParents > 0) {
      // Generate the first parent with a random age
      const firstParentAge = chance.integer({
        min: MIN_AGE,
        max: MIN_AGE + AGE_GAP,
      });
      parents.push(
        this.createParent(chance.gender() as GENDER, firstParentAge, lastName)
      );

      if (numParents === 2) {
        // For the second parent, ensure the age is within the specified gap
        const secondParentAge = chance.integer({
          min: firstParentAge - AGE_GAP / 2,
          max: firstParentAge + AGE_GAP / 2,
        });
        const secondParentGender =
          parents[0].gender === "male" ? "female" : "male"; // Assuming opposite genders for simplicity
        parents.push(
          this.createParent(secondParentGender, secondParentAge, lastName)
        );
      }
    }
    return parents;
  }
}

export { CharacterEngine };
