import Command from "./commandInterface";

/**
 * Некоторые команды способны выполнять простые операции самостоятельно.
 */
export default class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`
    );
  }
}
