class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }
    
    deepCopy() {
        return new Address(this.streetAddress, this.city, this.country);
    }

    toString() {
        return `Address: ${this.streetAddress}, ${this.city}, ${this.country}`;   
    }
}

module.exports = Address;