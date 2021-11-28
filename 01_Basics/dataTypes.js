// --
// Primitive data types
// --

// Numbers
const day = 5;
// BigInt (new in ECMAScript 2020)

// Strings
const name = "Serhii";
console.log(typeof day);

// Boolean
let isLogged = true;

// Undefined
let undef;
console.log(undef);

// Null
let minute = null;
console.log(minute);

// function
typeof console.log;

// Symbol, (new in ECMAScript 2015)
const name = Symbol();
// Here are two symbols with the same description:
let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");

console.log(Sym1 === Sym2); // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.

// --
// OBJECT
// --
let obj = {};
