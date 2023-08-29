const Machine = require("../machine");

class OldPrinter extends Machine {
    fax(doc) { 
        // can't fax
        throw new Error("Not implemented fax");
    }
    print(doc) { }
    scan(doc) {
        // can't scan
        throw new Error("Not implemented scan");
     }
}

class ProhoCopier extends Machine {
    fax(doc) { 
        // can't fax
        throw new Error("Not implemented fax");
    }
    print(doc) { }
    scan(doc) { }
}

class ModernPrinter extends Machine { }