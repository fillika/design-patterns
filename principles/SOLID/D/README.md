# Dependency Inversion Principle

High level modules should NOT DIRECTLY DEPENDS on low level module. Instead od this they should depend on abstraction. In case of JS we can create a class that going to behavior as abstract. 

We have a low level nodule and in `bad.js` we filter data in class directly. So, our class `Research` knows about data type. If data going to be changed we'll have to re-write all files where we directly worked with it.

In `good.js` we use method from browser. Our class in low level inherit from `RelationshipsBrowser` a method which allows us find data by name.

More info and comments in `/examples`.