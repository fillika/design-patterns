// https://refactoring.guru/ru/design-patterns/command/typescript/example

import ComplexCommand from "./commands/complexCommand";
import SimpleCommand from "./commands/simpleCommand";
import Invoker from "./invoker";
import Receiver from "./receiver";

/**
 * Клиентский код может параметризовать отправителя любыми командами.
 */
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));

const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();