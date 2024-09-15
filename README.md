# JavaScript Variables

Variables are fundamental in JavaScript programming. They allow developers to store and manipulate data. This document explains the different types of variables, how to declare them, and best practices.

## Table of Contents
1. [Introduction](#introduction)
2. [Variable Declarations](#variable-declarations)
3. [Variable Types](#variable-types)
4. [Variable Naming Rules](#variable-naming-rules)
5. [Hoisting](#hoisting)
6. [Best Practices](#best-practices)
7. [Examples](#examples)
8. [References](#references)

## Introduction
In JavaScript, a variable is a container that holds data that can be used and modified later. You can declare a variable using `var`, `let`, or `const`, each of which behaves differently.

## Variable Declarations

There are three ways to declare variables in JavaScript:
1. **`var`**: The old way of declaring variables. `var` has function scope and is hoisted.
2. **`let`**: Introduced in ES6, `let` has block scope, meaning it is confined to the block in which it is declared.
3. **`const`**: Similar to `let`, but the value of the variable cannot be reassigned once it's declared.

### Syntax:
```javascript
var x = 10;   // Using var
let y = 20;   // Using let
const z = 30; // Using const
