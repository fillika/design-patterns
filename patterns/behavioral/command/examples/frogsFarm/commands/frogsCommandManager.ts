import Command from "./command";
import { Frog } from "../frog";

export default class FrogsCommandManager {
  private frogs: Frog[];

  constructor() {
    this.frogs = [];
  }

  execute(command: Command, ...args: any[]) {
    return command.execute(this.frogs, ...args);
  }
}
