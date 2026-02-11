# 📘 Complete TypeScript Concepts Guide

This document covers important **TypeScript concepts** including: -
Generics - Interfaces - Interface Inheritance - Utility Types - Classes
& OOP - Access Modifiers - Inheritance & Polymorphism - Type Guards -
Enums - Runtime vs Compile-Time behavior

------------------------------------------------------------------------

# 🧩 1. Generics

## ✅ Generic Function

``` ts
function getinfo<T>(arg: T): T {
    return arg;
}
```

## ✅ Generic Interface

``` ts
interface Data<T, U> {
    id: T;
    name: U;
}
```

## ✅ Generic Class

``` ts
class Blueprint<T> {
    value: T;
    constructor(val: T) {
        this.value = val;
    }
    getdata(): T {
        return this.value;
    }
}
```

------------------------------------------------------------------------

# 🏗 2. Classes & Objects

``` ts
class Data {
    value: string;
    id: number;

    constructor(val: string, id: number) {
        this.value = val;
        this.id = id;
    }

    getdata(): string {
        return this.value;
    }
}
```

------------------------------------------------------------------------

# 🔐 3. Access Modifiers

  Modifier    Inside Class   Child Class   Outside Class
  ----------- -------------- ------------- ---------------
  public      ✅             ✅            ✅
  private     ✅             ❌            ❌
  protected   ✅             ✅            ❌

------------------------------------------------------------------------

# 🧬 4. Inheritance

``` ts
class Animal {
    public val: string = "riya";
    protected age: number = 12;
}

class Dog extends Animal {
    bark() {
        console.log(this.val);
        console.log(this.age);
    }
}
```

------------------------------------------------------------------------

# 🔁 5. Method Overriding (Polymorphism)

``` ts
class Payment {
    process(): void {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    process(): void {
        console.log("Processing credit card payment");
    }
}
```

------------------------------------------------------------------------

# 🔼 6. super Keyword

``` ts
class Dog extends Animal {
    constructor(val: string, id: number, age: number) {
        super(val, id);
    }
}
```

------------------------------------------------------------------------

# 🎯 7. Type Assertion

``` ts
const ans = (data as string).length;
```

------------------------------------------------------------------------

# 🛡 8. Type Guards

## typeof

``` ts
if (typeof data === "string") {
    console.log(data.toLowerCase());
}
```

## instanceof

``` ts
if (animal instanceof Dog) {
    animal.bark();
}
```

------------------------------------------------------------------------

# 📘 9. Interfaces

-   Defining object shapes using `interface`
-   Nested interfaces
-   Passing interface-typed objects to functions

### Example

``` ts
interface Author {
  name: string;
  position: string;
}

interface Post {
  post_id: number;
  post_data: string;
  author: Author;
}
```

------------------------------------------------------------------------

# 🔗 10. Interface Inheritance

``` ts
interface Post extends Author {
  post_id: number;
}
```

------------------------------------------------------------------------

# 🛠 11. Utility Types

## Omit

``` ts
type authority = Omit<data, "position">;
```

## Partial

``` ts
type allAllowed = Partial<data>;
```

## Pick

``` ts
type selective = Pick<data, "name" | "age">;
```

## Required

``` ts
type allRequired = Required<data>;
```

## Readonly

``` ts
type access = Readonly<Record<User["roles"], boolean>>;
```

## Record

``` ts
Record<keyType, valueType>
```

------------------------------------------------------------------------

# 🔀 12. Union Types

``` ts
type roles = "admin" | "user";
```

------------------------------------------------------------------------

# 🔍 13. Indexed Access Types

``` ts
User["roles"]
```

------------------------------------------------------------------------

# 🔐 14. Type-Safe Access Control Logic

``` ts
if (detail[member.roles]) {
  console.log("hello");
}
```

------------------------------------------------------------------------

# 🏷 15. Enums

``` ts
enum Role {
  Admin = "admin",
  User = "user"
}
```

------------------------------------------------------------------------

# ⚖ 16. Enums vs Types

  Feature                  type   enum
  ------------------------ ------ ------
  Exists at compile time   Yes    Yes
  Exists at runtime        No     Yes
  Creates JS object        No     Yes
  Can be logged            No     Yes

------------------------------------------------------------------------

# ⏳ 17. Runtime vs Compile-Time

-   `type` and `interface` are removed after compilation.
-   `enum` exists at runtime as a JavaScript object.
-   Enables dynamic access like:

``` ts
data[userinfo]
```

------------------------------------------------------------------------

⭐ Happy Learning TypeScript!
