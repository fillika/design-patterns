const Flyweight = require("./flyweight");

/**
 * Фабрика Легковесов создает объекты-Легковесы и управляет ими. Она
 * обеспечивает правильное разделение легковесов. Когда клиент запрашивает
 * легковес, фабрика либо возвращает существующий экземпляр, либо создает новый,
 * если он ещё не существует.
 */
class FlyweightFactory {
    constructor(initialFlyweights) {
        this.flyweights = {};
        
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    /**
     * Возвращает хеш строки Легковеса для данного состояния.
     */
    getKey(state) {
        return state.join('_');
    }

    /**
     * Возвращает существующий Легковес с заданным состоянием или создает новый.
     */
    getFlyweight(sharedState) {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    listFlyweights() {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

module.exports = FlyweightFactory;