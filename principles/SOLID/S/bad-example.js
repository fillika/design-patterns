// Single Responsibility Principle
// A classs should have a single primary responsibility

// This example is BAD because class Journal responsible for 2 different things 
// at the same time. And it will grow in the future

const fs = require('fs');

class Journal {
    constructor() {
        this.counter = 0;
        this.entries = {};
    }

    addEntry(text) {
        let id = ++this.counter;
        let entry = `${id}: ${text}`;
        this.entries[id] = entry;
        return this;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join("\n");
    }

    save(filename) {
        fs.writeFileSync(filename, this.toString());
    }

    loadFromFilename(filename) {
        //
    }

    loadFromUrl(url) {
        //
    }
}

let j1 = new Journal;
j1.addEntry("I cried today.");
j1.addEntry("I ate a bug");
console.log(j1.toString());



