// https://refactoring.guru/ru/design-patterns/proxy/typescript/example
const RealSubject = require("./realSubject");
const SubjectProxy = require("./subjectProxy");

/**
 * Клиентский код должен работать со всеми объектами (как с реальными, так и
 * заместителями) через интерфейс Субъекта, чтобы поддерживать как реальные
 * субъекты, так и заместителей. В реальной жизни, однако, клиенты в основном
 * работают с реальными субъектами напрямую. В этом случае, для более простой
 * реализации паттерна, можно расширить заместителя из класса реального
 * субъекта.
 */
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new SubjectProxy(realSubject);
clientCode(proxy);