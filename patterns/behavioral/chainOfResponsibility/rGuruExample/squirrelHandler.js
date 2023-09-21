const AbstractHandler = require("./abstractHandler");

class SquirrelHandler extends AbstractHandler {
    handle(request) {
        if (request === 'Nut')
            return `Squirrel: I'll eat the ${request}.`;

        return super.handle(request);
    }
}

module.exports = SquirrelHandler;