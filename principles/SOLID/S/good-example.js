// Single Responsibility Principle
// A classs should have a single primary responsibility 

const fs = require('fs');
const os = require("os");
const userHomeDir = os.homedir();

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
}

class FileSystemManager {
    constructor(path) {
        this.path = `${userHomeDir}/${path}`;
    }

    saveToFile(entity, filename) {
        if (!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path, { recursive: true });
        }

        fs.writeFileSync(`${this.path}/${filename}`, entity.toString());
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

let fsm = new FileSystemManager("temp/journal");
fsm.saveToFile(j1, "j1.txt");
