import { Frog } from "../frog";
import Command from "./command";

export default function addFrog(frog: Frog) {
  function pushFrogToFrogsArr(frogs: Frog[]) {
    frogs.push(frog);
  }

  return new Command(pushFrogToFrogsArr);
}
