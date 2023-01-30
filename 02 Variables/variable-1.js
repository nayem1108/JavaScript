console.log('\nHello from JS Variable\n');

/*
* let

* var

* const

*/


// examples:

let name = 'Nayem Uddin';
console.log(name + '\n');
/**
 * 
 * {
 * scope: block based worki this variable
    let name;
    name = 'hello';
    console.log(name);
    }
 * 
 */


// same var name not allowed while using let key-word
// let name = 'Update Name';
console.log(name);

let a = 12;
let b = 12;

console.log(a);
console.log(b);

// increase readability in this way of declaration
let aa =2,
    bb= 23, 
    c = 12;


// const

const user = "mrx";
console.log(user);

// user = "mry";          //can't possible to update in const type
console.log(user);


// var global function scope, not has block scope
var myVar = 100; //global scope or function scope nut no block scope


// naming role
/**
 * 1. alphabet, but can't start with digit;
 * 2. contains only special character/symbol($, _);
 * 3. combination of alphabet, _, $, number(but not at start);
 * 4. keywords can't be used as variable name
 * 5. case sensitive
 */

// some example of variable declaration;
let $name_12 = 23;
let _$123oojs = 1;
let _USER = "mrx";
let PASSWD_$ = "5523";