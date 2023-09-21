const AbstractHandler = require("./abstractHandler");

class DogHandler extends AbstractHandler {
    handle(request) {
        if (request === 'MeatBall')
            return `Dog: I'll eat the ${request}.`;

        return super.handle(request);
    }
}

module.exports = DogHandler;