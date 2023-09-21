/**
 * Поведение цепочки по умолчанию может быть реализовано внутри базового класса
 * обработчика.
 */
class AbstractHandler {
    setNext(handler) {
        this.nextHandler = handler;
        // Возврат обработчика отсюда позволит связать 
        // обработчики простым способом, вот так:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

module.exports = AbstractHandler;