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
console.log(5 == '5'); // true
console.log(null == undefined); // true
console.log(true == 1); // true
console.log('0' == false); // true
