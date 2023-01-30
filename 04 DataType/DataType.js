/**
 * types of data or variable
 * 1. premetive data type(stack)
 * 2. reference type(heap)
 * 
 */

/**
 * premitive data types
 */

// let n = 12;
// let n = "Nayem";
// let n = true;
// let n = 12.5;
// let ch = 'fd';

let obj = {
    name: 'hi',
}
console.log(typeof(obj));

let x = [12];
let y = [12];

console.log(x);
console.log(y);

let date = new Date();
console.log(date);

let a = 3;
let b = '3';
if(a==b)
    console.log('value same')
if(a !== b)
    console.log('data type not same');
