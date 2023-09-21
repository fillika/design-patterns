class CreatureModifier {
    constructor(game, creature) {
        this.game = game;
        this.creature = creature;
        this.token = game.queries.subscribe(this.handle.bind(this));
    }

    handle(sender, query) {
        // abstract
    }

    dispose() {
        this.game.queries.unsubscribe(this.token);
    }
}

module.exports = CreatureModifier;