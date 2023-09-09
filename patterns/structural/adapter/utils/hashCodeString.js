module.exports = function (str) {
    if (Array.prototype.reduce) {
        return str.split("").reduce(function (a, b) {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
    }
    let hash = 0;
    if (str.length === 0)
        return hash;

    for (let i = 0; i < str.length; i++) {
        const character = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
};