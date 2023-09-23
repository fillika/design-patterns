import api from "../api";
import { Frog } from "../frog";
import Command from "./command";

export default function saveToDatabase() {
  function save(frogs: Frog[]) {
    api.saveToDb(frogs);
  }

  return new Command(save);
}
