const Query = require("./query");
const whatToQuery = require("./actionsEnum");

class Creature {
    constructor(game, name, attack, defence) {
        this.game = game;
        this.name = name;
        this.initialAttack = attack;
        this.initialDefence = defence;
    }

    get attack() {
        let q = new Query(this.name, whatToQuery.attack, this.initialAttack);
        this.game.performQuery(this, q);
        
        return q.value;
    }

    get defence() {
        let q = new Query(this.name, whatToQuery.defence, this.initialDefence);
        this.game.performQuery(this, q);
        
        return q.value;
    }

    toString() {
        return `${this.name} (${this.attack}/${this.defence})`;
    }
}

module.exports = Creature;