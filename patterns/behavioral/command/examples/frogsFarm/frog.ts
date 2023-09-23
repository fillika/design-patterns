import FrogFood from "./frogFood";

export type FrogOptions = {
  name: string;
  sex: string;
  age: number;
};

export class Frog {
  options: FrogOptions;
  foodsEaten: FrogFood[];
  wordsSpoken: string[];

  constructor(options: FrogOptions) {
    this.options = options;
    this.foodsEaten = [];
    this.wordsSpoken = [];
  }

  getOption<K extends keyof FrogOptions>(key: K): FrogOptions[K] {
    return this.options[key];
  }

  getFoodsConsumed() {
    return this.foodsEaten;
  }

  getWordsSpoken() {
    return this.wordsSpoken;
  }

  eat(food: FrogFood) {
    console.log(
      `Frog "${this.options.name}" is eating: ${food.name} (${food.type})`
    );
    this.foodsEaten.push(food);
  }

  talk(words: string[]) {
    console.log(words);
    this.wordsSpoken.push(...words);
  }
}
