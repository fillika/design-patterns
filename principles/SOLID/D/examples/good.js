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

// This approach is BETTER because we get a browser and we don't
// work with data directly. So, if something changed we will need only
// change code inside the browser.
class Research {
    constructor(browser) {
        for (const child of browser.findAllChildrenOf(PARENT_NAME)) {
            console.log(`${PARENT_NAME} has a child ${child.name}`);
        }
    }
}

new Research(rels);