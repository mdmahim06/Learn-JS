
# Data Types

**Data Types in JavaScript:**

**Number:**

- Represents numerical values, including integers and floating-point numbers.
- Can store values up to 2^53 - 1 (9,007,199,254,740,992) with precision.
- For larger numbers or more precise calculations, use `BigInt` or `Number.EPSILON`.

**BigInt:**

- A newer data type introduced in ES2020 for representing arbitrarily large integers.
- Can store numbers beyond the range of `Number`, allowing for precise calculations with very large values.
- Created by appending `n` to the number literal (e.g., `123n`).

**String:**

- Represents sequences of characters, including text, symbols, and numbers.
- Enclosed in single or double quotes (e.g., `"Hello"` or `'world'`).
- Can be manipulated using various methods like `length`, `indexOf`, `slice`, `concat`, and more.

**Boolean:**

- Represents logical values, either `true` or `false`.
- Used for conditional statements, logical operations, and controlling program flow.

**null:**

- A special value representing the absence of a value.
- Often used to indicate that a variable or property has no assigned value.

**undefined:**

- A special value indicating that a variable has not been initialized or assigned a value.
- Different from `null` in that it signifies the absence of a value altogether.

**Symbol:**

- A unique identifier created using the `Symbol()` function.
- Used for properties on objects that need to be private or unique.
- Provides a way to create symbols that are not accidentally duplicated.

