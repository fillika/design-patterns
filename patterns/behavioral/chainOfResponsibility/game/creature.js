class Creature {
    constructor(name, attack, defence) {
        this.name = name;
        this.attack = attack;
        this.defence = defence;
    }

    toString() {
        return `${this.name} (${this.attack}/${this.defence})`;
    }
}

module.exports = Creature;