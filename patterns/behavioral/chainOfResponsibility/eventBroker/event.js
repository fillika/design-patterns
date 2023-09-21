class Event {
    constructor() {
        this.handlers = new Map;
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(index) {
        this.handlers.delete(index);
        this.count--;
    }

    fire(sender, args) {
        this.handlers.forEach(handler => handler(sender, args))
    }
}

module.exports = Event;