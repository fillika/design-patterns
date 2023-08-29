const RelationshipEnum = require("../relationship_enum");
const RelationshipsBrowser = require("./relationshipsBrowser");

class Relationships extends RelationshipsBrowser {
    constructor() {
        super();
        this.data = [];
    }

    addParentAndChild(parent, child) {
        this.data.push({
            from: parent,
            type: RelationshipEnum.parent,
            to: child,
        });
    }

    findAllChildrenOf(name) {
        return this.data
            .filter(r =>
                r.from.name === name &&
                r.type === RelationshipEnum.parent
            ).map(rel => rel.to);
    }
}

module.exports = Relationships;