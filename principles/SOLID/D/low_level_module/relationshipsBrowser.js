class RelationshipsBrowser {
    constructor() {
        if (this.constructor === RelationshipsBrowser) {
            throw new Error("This is abstract class");
        }
    }

    findAllChildrenOf(name) {}
}

module.exports = RelationshipsBrowser;