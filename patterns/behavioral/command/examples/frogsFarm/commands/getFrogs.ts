import { Frog } from "../frog";
import Command from "./command";

export default function getFrogs() {
  return new Command((frogs: Frog[]) => frogs);
}
