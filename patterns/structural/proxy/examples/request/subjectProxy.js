/**
 * Интерфейс Заместителя идентичен интерфейсу Реального Субъекта.
 */
class Proxy {
    /**
     * Заместитель хранит ссылку на объект класса РеальныйСубъект. Клиент может
     * либо лениво загрузить его, либо передать Заместителю.
     */
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    /**
     * Наиболее распространёнными областями применения паттерна Заместитель
     * являются ленивая загрузка, кэширование, контроль доступа, ведение журнала
     * и т.д. Заместитель может выполнить одну из этих задач, а затем, в
     * зависимости от результата, передать выполнение одноимённому методу в
     * связанном объекте класса Реального Субъект.
     */
    request(){
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    checkAccess() {
        // Некоторые реальные проверки должны проходить здесь.
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    logAccess() {
        console.log('Proxy: Logging the time of request.');
    }
}

module.exports = Proxy;