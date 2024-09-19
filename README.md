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


### Strict Inequality  (`!==`)
Strict inequality checks if two values are not identical in both type and value. It does not perform type conversion.

**Syntax:**

```
value1 !== value2

```

## Rules:
- Values must be of different types or different values.


**Example:**
```javascript
console.log(10 !== 5); // true
console.log('hello' !== 'world'); // true
console.log(true !== 1); // true
console.log(undefined !== null); // true
```