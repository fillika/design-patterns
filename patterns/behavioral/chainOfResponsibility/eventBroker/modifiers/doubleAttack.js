const CreatureModifier = require("./creatureModifier");
const whatToQuery = require("../actionsEnum");

class DoubleAttackModifier extends CreatureModifier {
    handle(sender, query) {
        if (this.isCreatureAttackIncreasing(query))
            query.value *= 2;
    }

    isCreatureAttackIncreasing(query) {
        return query.creatureName === this.creature.name &&
            query.whatToQuery === whatToQuery.attack;
    }
}

module.exports = DoubleAttackModifier;