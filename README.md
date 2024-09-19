# Data Types

Here’s the updated list with `NaN` included:

---

### **Data Types in JavaScript**

#### **Number**

- **Description**: Represents numerical values, including both integers and floating-point numbers.
- **Range**: Can store values from `-(2^53 - 1)` to `2^53 - 1` with precision.
- **Use Cases**: Arithmetic operations, mathematical functions, and numeric calculations.
- **Special Considerations**: For very large integers or precise calculations beyond this range, consider using `BigInt` or handle floating-point precision issues with `Number.EPSILON`.

#### **BigInt**

- **Description**: A data type introduced in ES2020 for representing arbitrarily large integers.
- **Range**: Can store integers beyond the limits of the `Number` type.
- **Use Cases**: When exact calculations with very large integers are needed, such as in cryptography or high-precision computations.
- **Creation**: Use the `n` suffix to create `BigInt` values (e.g., `123n`).

#### **String**

- **Description**: Represents sequences of characters, which can include text, symbols, and numbers.
- **Syntax**: Enclosed in single quotes (`'Hello'`) or double quotes (`"world"`).
- **Use Cases**: Handling and manipulating textual data, user input, and string-based operations.
- **Methods**: Common methods include `length`, `indexOf`, `slice`, and `concat`.

#### **Boolean**

- **Description**: Represents logical values, either `true` or `false`.
- **Use Cases**: Control flow in conditional statements, logical operations (AND, OR, NOT), and decisions in programming.

#### **null**

- **Description**: A special value indicating the deliberate absence of any object value.
- **Use Cases**: To represent an intentionally empty or non-existent value for a variable or property.

#### **undefined**

- **Description**: A special value indicating that a variable has been declared but not yet assigned a value.
- **Use Cases**: To check if a variable has been initialized; it is different from `null` which is used for explicit absence of value.

#### **Symbol**

- **Description**: A unique and immutable data type used for object properties that need to be unique or private.
- **Creation**: Created using the `Symbol()` function.
- **Use Cases**: Defining unique property keys that won’t clash with any other property keys.

#### **NaN**

- **Description**: Stands for "Not a Number" and represents a value that is not a legal number, usually the result of invalid arithmetic operations.
- **Type**: `NaN` is of type `number`.
- **Use Cases**: Indicates an error or an undefined numerical result in calculations.
- **Special Considerations**: `NaN` is not equal to any value, including itself. Use `isNaN()` to check if a value is `NaN`.

  ```javascript
  console.log(NaN === NaN); // false
  console.log(isNaN(NaN)); // true
  ```

---

Let me know if you need more details or if there's anything else you'd like to add!
=======
# JavaScript Comparison Guide

## Overview
This repository provides a comprehensive guide to the various types of comparisons available in JavaScript. Comparisons in JavaScript are essential for checking equality, inequality, and other conditions between values, variables, or objects. This guide covers the basics of comparison operators, including their differences, best practices, and edge cases.

## Table of Contents
- [Comparison Types](#comparison-types)
  - [Equality (`==`)](#equality)
  - [Strict Equality (`===`)](#strict-equality)
  - [Inequality (`!=`)](#inequality)
  - [Strict Inequality (`!==`)](#strict-inequality)
  - [Relational Operators](#relational-operators)
- [Type Coercion](#type-coercion)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Comparison Types

### Equality (`==`)
The `==` operator checks for equality between two values but **does not consider the type** of the values. It uses **type coercion**, meaning JavaScript will attempt to convert the values to the same type before comparing.

**Example:**
```javascript
console.log(5 == '5'); // true  (string '5' is coerced to number 5)
console.log(null == undefined); // true (both are considered equal in non-strict comparison)
console.log(true == 1); // true  (boolean true is coerced to number 1)
console.log('0' == false); // true (string '0' is coerced to number 0, which is equal to false)
```


### Equality (`==`)
The `==` operator checks for equality between two values but **does not consider the type** of the values. It uses **type coercion**, meaning JavaScript will attempt to convert the values to the same type before comparing.

**Example:**
```javascript
console.log(5 == '5'); // true  (string '5' is coerced to number 5)
console.log(null == undefined); // true (both are considered equal in non-strict comparison)
console.log(true == 1); // true  (boolean true is coerced to number 1)
console.log('0' == false); // true (string '0' is coerced to number 0, which is equal to false)
```


### Strict Equality  (`===`)
The strict equality operator (`===`) compares two values for equality without performing type coercion. Both values must be of the same type and have the same value to be considered equal.

**Example:**
```javascript
console.log(5 === '5'); // false, because they are of different types
console.log(null === undefined); // false, because they are of different types
console.log('0' === false); // false, because they are of different types
console.log(0 === false); // true, because they are both of the same type and value

```


###  Loose Inequality (`!=`)
The loose inequality operator checks if two values are not equal, performing type coercion if necessary.

#### Syntax:

```
value1 != value2

```


#### Example:
```javascript
console.log(5 != '5'); // false, because '5' is coerced to the number 5
console.log(null != undefined); // false, because both represent the absence of value
console.log('0' != false); // false, '0' is coerced to 0 and false is coerced to 0

```



### Strict Inequality  (`!==`)
Strict inequality checks if two values are not identical in both type and value. It does not perform type conversion.

#### Syntax:

```
value1 !== value2

```

#### Rules:
- Values must be of different types or different values.


#### Example:
```javascript
console.log(10 !== 5); // true
console.log('hello' !== 'world'); // true
console.log(true !== 1); // true
console.log(undefined !== null); // true
```


### Greater Than (`>`)

The greater than operator checks if the value on the left is greater than the value on the right.

#### Syntax:

```
value1 > value2

```

#### Example:

```
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log('apple' > 'banana'); // false, compared by Unicode value
```





###  Less Than (`<`)

The less than operator checks if the value on the left is less than the value on the right.

#### Syntax:

```
value1 < value2

```

#### Example:

```
console.log(5 < 10); // true
console.log(10 < 5); // false
console.log('apple' < 'banana'); // true, compared by Unicode value

```





### Greater Than or Equal To  (`>=`)

The greater than or equal to operator checks if the value on the left is greater than or equal to the value on the right.

#### Syntax:

```
value1 >= value2


```

#### Example:

```
console.log(10 >= 10); // true
console.log(10 >= 5); // true
console.log(5 >= 10); // false

```




###  Less Than or Equal To  (`<=`)

The greater than operator checks if the value on the left is greater than the value on the right.

#### Syntax:

```
value1 <= value2


```

#### Example:

```
console.log(5 <= 10); // true
console.log(10 <= 10); // true
console.log(10 <= 5); // false

```
