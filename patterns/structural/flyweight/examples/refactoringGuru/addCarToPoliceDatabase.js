module.exports = function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = ff.getFlyweight([brand, model, color]);

    // Клиентский код либо сохраняет, либо вычисляет внешнее состояние и
    // передает его методам легковеса.
    flyweight.operation([plates, owner]);
};