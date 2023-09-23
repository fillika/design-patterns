import { Frog } from "../frog";
import FrogFood from "../frogFood";
import Command from "./command";

export default function feedFrogs(food: FrogFood) {
  function feedAll(frogs: Frog[]) {
    frogs.forEach((frog) => frog.eat(food));
  }

  return new Command(feedAll);
}
