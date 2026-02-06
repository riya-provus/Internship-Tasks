# Internship-Tasks
1. var is accessible throughout the function (function scoped)
2. let is accessible only within the block (block scoped)
3. const cannot be initialized again (more than once)
4. map()
Creates a new array
Transforms each element
5. reduce() 
Reduces array to single value
Uses accumulator
6. filter() 
Returns elements that satisfy a condition
7. Objects are mutable
Spread operator helps in immutability
8. Object Referencing
obj/array are copied by references
primitives are copied by value 
9. call back functions
asynchronous handle using setTimeout 
performs actions in specific order
10. Higher Order Functions
Functions Take another function as argument
map,reduce,filter,find,some(returns true or false based on condition ),every(returns true or false based on condition),forEach(not returns new array)
11. function composition
combining multiple functions to creating a new function

12. Prototype
prototype defines shared properties
it creates the function single copy which will be shared by each instance
Helps to save the memory.
It exist only on the constructor function.
13. __proto__
it just acts as a link which points to the parent prototype (points to the root)
it exist for all objects and used in Inheritance
14. Prototype chaining
          s2
           ↓ __proto__
          Student.prototype
           ↓ __proto__
          Object.prototype
           ↓ __proto__
          null
15. Destructuring
it just unwraps the properties of the object into the independenat variables 
16. Spread Operator
used to merge two arrays or just create a new array with few modifications in original
17.Inheritance in prototyping
                newone.prototype=Object.create(old.prototype);
    It helps to inherit all methods from the parent function/object

    
18. Promises helps to maintain a synchronous calling in the code
19. After creating a new promise the function is being paused but not the entire code is being interupted
20. the code outside the function keeps on executing.
21. once the promise is being resolved then the remaining part of the function starts execution
22. await is needed only for asynchronous function
23. As callbacks exist, so inorder to wait till it executes we use promise
24. Once promise is resolved, the wait is over and the further code in function proceeds execution
25. callbacks never return a answer. So we need Promises whenever we need a value in return from callbacks

