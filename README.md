# JavaScript Notes

These are my notes that I made while brushing up on JS. Each section is
outlined here, and there are examples in the javascript file.

Lots of good stuff can be found in the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Basics

### Types

There are 5 basic primitive types along with two other less used type:

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

**Variables are able to change type in JS. But that isn't always a good thing.**

### Variables

There are two common ways to create variables in JS, `let` and `const`. We use
camelCase for variables in JS. We can only have one of a variable in a given
scope. Variables declared with `const` can't be updated.

`var` was the old way that was used to create variables. There is basically no
good reason to use it over `let` and `const`.

### Unary Operators

We can use `++`, `+=` and other such syntax.

### Booleans

These are values that are either `true` of `false`. These pop up a lot. However,
they operate the same way that booleans
operate in other languages.

### Strings

Strings are just text. "Strings" of characters.

We can use some operators with strings, but they are different than math
operators.

Strings are indexed. Each character has a number in the string. The first index
is always `0`.

Every string has a property called `.length`.

Strings are immutable in JS.

There are all sorts of useful methods that we can use on strings.
