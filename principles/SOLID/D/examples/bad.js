const RelationshipEnum = require("../relationship_enum");
const Relationships = require("../low_level_module/relationships");
const Person = require("../person");

const PARENT_NAME = "Papa";

// All this things is HIGH LEVEL STUFF
let parent = new Person(PARENT_NAME);
let child1 = new Person("John");
let child2 = new Person("Barbara");

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

// ! This is REALLY REALLY BAD because we filter the data directly
// ! and if something in data changed we will have to modify every file
// ! in project 
class Research {
    constructor(relationships) {
        let relations = relationships.data;

        for (const rel of relations.filter(predicate)) {
            console.log(`${PARENT_NAME} has a child ${rel.to.name}`);
        }
    }
}

function predicate(r) {
    return r.from.name === PARENT_NAME && r.type == RelationshipEnum.parent
}

new Research(rels);