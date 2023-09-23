import Command from "./commandInterface";
import Receiver from "../receiverInterface";

/**
 * Но есть и команды, которые делегируют более сложные операции другим объектам,
 * называемым «получателями».
 */
export default class ComplexCommand implements Command {
  private receiver: Receiver;

  /**
   * Данные о контексте, необходимые для запуска методов получателя.
   */
  private a: string;
  private b: string;

  /**
   * Сложные команды могут принимать один или несколько объектов-получателей
   * вместе с любыми данными о контексте через конструктор.
   */
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  /**
   * Команды могут делегировать выполнение любым методам получателя.
   */
  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}
