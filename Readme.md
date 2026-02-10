## Features / Concepts Implemented

### 1. Scope

- `let` (block scope) vs `var` (function scope)
- Accessing variables inside/outside blocks

### 2. Array Methods

- `map()` – transform array elements
- `reduce()` – aggregate array values
- `filter()` – select elements based on condition
- `forEach()` – iterate over elements
- `find()` – find first matching element
- `some()` – check if any element satisfies condition
- `every()` – check if all elements satisfy condition

### 3. Object Immutability & Spread Operator

- Objects are mutable by default
- Create new objects using spread operator
- Merge arrays using spread operator

### 4. Reference vs Primitive Types

- Objects/arrays are copied by reference
- Primitives are copied by value
- Changing a reference affects original object

### 5. Callbacks & Asynchronous Programming

- Using `setTimeout()` for delayed execution
- Functions as callback arguments
- Async flow demonstration

### 6. Higher-Order Functions

- Functions that accept other functions or return functions
- Examples: `map`, `filter`, `reduce`, `find`, `some`, `every`, `forEach`

### 7. Function Composition

- Composing multiple functions into one
- Nested function execution

### 8. Prototype & Inheritance

- Constructor functions
- Adding methods and properties via `prototype`
- Prototype chaining
- Object.create() inheritance
- Prototype-based method overriding

### 9. Destructuring

- Extracting object properties into variables
- Default values in destructuring

### 10. Promises & Async/Await

- Creating and resolving/rejecting promises
- Using `async`/`await` for API calls
- Error handling with `try/catch` and `finally`
- Asynchronous data fetching from **Weather API**

### 11. Static Typing (TypeScript)

- Variable type annotations (`string`, `number`, arrays, tuples, unions)
- Functions with return types (`void`, `never`)
- Optional properties in objects
- Index signatures for dynamic keys
- Complex types: arrays, tuples, objects, interfaces

### 12. Dynamic Typing

- Runtime type checking using `typeof`
- Variables without type annotations follow JS dynamic typing

### 13. Optional Chaining

- Safe property access for potentially undefined or null values

### 14. Index Signature

- Accepting dynamic keys in objects (`[key:string]: unknown`)

### 15. Complex Types

- Arrays, tuples, objects, interfaces
- Push and manipulate elements in arrays and tuples

### 16. Any & Unknown Types

- `any` – bypass type checking
- `unknown` – safer alternative, requires type checking before usage

### 17. Void & Never

- `void` – function that returns nothing
- `never` – function that never returns (throws error or infinite loop)

### 18. Conditional & Optional Properties

- Optional object properties with `?`
- Nullish/optional checks

### 19. API Fetching

- Using `fetch` to get data from Weather API
- Parsing JSON responses
- Handling user input with `readline` module

### 20. Static vs Dynamic Typing Interaction

- TypeScript static types at compile time
- `typeof` works dynamically at runtime (JS behavior)

### 21. Merging & Updating Arrays/Objects

- Merge multiple arrays using spread operator
- Merge objects with new properties

### 22. Student/Employee Data Manipulation

- Mapping object arrays
- Filtering based on conditions
- Reducing data for sum or aggregation
- Updating arrays with new records using spread operator


## 1. Interfaces

- Defining object shapes using `interface`
- Nested interfaces
- Passing interface-typed objects to functions

### Example
- `Author` interface
- `Post` interface containing `Author`

---

## 2. Interface Inheritance

- Extending one interface from another using `extends`
- Reusing properties across interfaces

### Example
- `Post` extends `Author`
- Shared properties: `name`, `position`

---

## 3. Utility Types

### 3.1 Omit
- Remove specific properties from a type

```ts
type authority = Omit<data, "position">;
```

---

### 3.2 Partial
- Make all properties optional

```ts
type allAllowed = Partial<data>;
```

---

### 3.3 Pick
- Select specific properties from a type

```ts
type selective = Pick<data, "name" | "age">;
```

---

### 3.4 Required
- Convert optional properties into required ones

```ts
type allRequired = Required<data>;
```

---

### 3.5 Readonly
- Prevent modification of object properties after initialization

```ts
type access = Readonly<Record<User["roles"], boolean>>;
```

---

### 3.6 Record
- Create object types with fixed keys and value types

```ts
Record<keyType, valueType>
```

Used to map roles to access permissions.

---

## 4. Union Types

- Restrict values to a fixed set of strings

```ts
type roles = "admin" | "user";
```

---

## 5. Indexed Access Types

- Extract a property type from another type

```ts
User["roles"]
```

---

## 6. Type-Safe Access Control Logic

- Role-based access using `Record`
- Dynamic access using bracket notation

```ts
if (detail[member.roles]) {
  console.log("hello");
}
```

---

## 7. Enums

- Define named constants that exist at **compile time and runtime**
- Automatically create a runtime object

```ts
enum Role {
  Admin = "admin",
  User = "user"
}
```

---

## 8. Enums vs Types

| Feature | `type` | `enum` |
|------|------|------|
| Exists at compile time | Yes | Yes |
| Exists at runtime | No | Yes |
| Creates JS object | No | Yes |
| Can be logged | No | Yes |

```ts
console.log(Role); // valid
```

---

## 9. Enum-Based Record Mapping

- Using enums as keys in `Record`
- Safe and structured access control

```ts
type access = Record<Role, boolean>;
```

---

## 10. Runtime vs Compile-Time Behavior

- `type` and `interface` are erased after compilation
- `enum` remains as a JavaScript object at runtime
- Enables dynamic access like:

```ts
data[userinfo]
```

---