# Liskov Substitution Principle

The Liskov substitution principle states that any class should be substitutable for its parent class without unexpected consequences. In other words, chilren should have expected behavior as parents.

In *bad-example.js* `class Square` inherit `class Rectangle` and it looks like everything OK. But when we change one side size square is not "square" anymore.

In *good-example.js* `class Square` and `Rectangle` inherit from `Shape` (abstract). Each class decide in their own how to set/change size of their shape.