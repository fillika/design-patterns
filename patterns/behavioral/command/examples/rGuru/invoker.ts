import Command from "./commands/commandInterface";

/**
 * Отправитель связан с одной или несколькими командами. Он отправляет запрос
 * команде.
 */
export default class Invoker {
  private onStart: Command;

  private onFinish: Command;

  /**
   * Инициализация команд.
   */
  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  /**
   * Отправитель не зависит от классов конкретных команд и получателей.
   * Отправитель передаёт запрос получателю косвенно, выполняя команду.
   */
  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}
