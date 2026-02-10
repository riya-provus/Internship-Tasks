
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