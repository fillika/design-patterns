# Open-Closed Principle

Main idea of principle is
> OPEN for EXTENSION and CLOSE for modification


Every time when I add a new method to class I modify it. Related to example in JS files if I want to add more filters methods I have to re-write logic. That's where we can use **Specification pattern**.


In 'good-example.js' we use class *FilterSpecification* and to get green products we've created ColorSpecification that contains method 'isSatisfied'. Every spec should have this method. Using filter in this way we will (almost)never modify class *FilterSpecification*. This approach more flexible that 'bad-example.js'.

We also use **Combinator** in 'AndSpecification'. Because this class combine 2 or more specs with AND boolean logic.