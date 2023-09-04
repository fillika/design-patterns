const MARK_KEY = "typeIndexProp";

class Serializer {
    constructor(types) {
        this.types = types;
    }

    clone(obj) {
        this.markRecursive(obj);
        let copy = this.getCopyThroughJSON(obj);
        return this.reconstructRecursive(copy);
    }

    getCopyThroughJSON(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    markRecursive(obj) {
        // This goes throught entire obj
        let index = this.findIndex(obj);

        if (index !== -1) {
            obj[MARK_KEY] = index;

            for(let key in obj) {
                if (obj.hasOwnProperty(key))
                    this.markRecursive(obj[key]);
            }
        }
    }

    findIndex(obj) {
        return this.types.findIndex(t => t.name === obj.constructor.name);
    }

    reconstructRecursive(originalObj) {
        if (originalObj.hasOwnProperty(MARK_KEY)) {
            let Type = this.types[originalObj[MARK_KEY]];
            let newObj = new Type();

            for (let key in originalObj) {
                if (originalObj.hasOwnProperty(key) && originalObj[key] !== null) {
                    newObj[key] = this.reconstructRecursive(originalObj[key]);
                }
            }

            delete newObj[MARK_KEY];
            return newObj;
        }

        return originalObj;
    }
}

module.exports = Serializer;