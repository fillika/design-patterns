const AbstractHandler = require("./abstractHandler");

class MonkeyHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Banana')
            return `Monkey: I'll eat the ${request}.`;

        return super.handle(request);
    }
}

module.exports = MonkeyHandler;