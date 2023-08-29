# Interface Segregation Principle

JavaScript doesn't have interface. And that makes following this principle hard.

Class `Machine` is interface and it's describe 3 methods. In bad example we extends every class with this interface. `OldPrinter` has only `scan` method, `ProtCopier` has `print` and `scan` and only `ModernPrinter` has all three methods. So, if we write our code in this way we will get unexpected behavior in the future.

More correct way in JS is create a separate class that doesn't inherit all methods from `Machine`. In other programming languages it solves with multiple inheritance.