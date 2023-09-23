import api from "./api";
import { Frog } from "./frog";
import FrogFood from "./frogFood";

export default class FrogManager {
  private frogs: Frog[];
  private api: typeof api;

  constructor(API: typeof api) {
    this.frogs = [];
    this.api = API;
  }

  addFrog(frog: Frog) {
    this.frogs.push(frog);
    return this;
  }
  getFrogs() {
    return this.frogs;
  }
  getMaleFrogs() {
    return this.frogs.filter((frog) => {
      return frog.getOption("sex") === "male";
    });
  }
  getFemaleFrogs() {
    return this.frogs.filter((frog) => {
      return frog.getOption("sex") === "female";
    });
  }
  feedFrogs(food: FrogFood) {
    this.frogs.forEach((frog) => frog.eat(food));
    return this;
  }
  save() {
    return Promise.resolve(this.api.saveToDb(this.frogs));
  }
}
