class BaseModifier {
    constructor(creature) {
        this.creature = creature;
        this.next = null; // linked list!
    }

    add(modifier) {
        if (this.next !== null) this.next.add(modifier);
        else this.next = modifier;
    }

    handle() {
        if (this.next !== null)
            this.next.handle();
    }
}

module.exports = BaseModifier;