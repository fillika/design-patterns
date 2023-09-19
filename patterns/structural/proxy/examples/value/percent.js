class Percent {
    constructor(percent) {
        this.percent = percent;
    }

    // This is the first exmaple of pattern 'Proxy' - proxy value
    valueOf() {
        return this.percent / 100;
    }
}

module.exports = Percent;