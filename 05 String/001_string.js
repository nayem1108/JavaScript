// create a string
// using string literals
let message = "hello";
console.log(message);
console.log(typeof message);


// using constructor or string class
// not recomanded bcoz of time and spece required
let msg = new String("hi o");
console.log(msg);
console.log(typeof msg);


// back tick for take multi-line string
let _$USERNAME = `
    Nayem 
    Uddin
    City University.
`;
console.log(_$USERNAME);


let a = 'Nayem';
let b = 'Uddin';

let myconCat = a +" "+ b;
console.log(myconCat);

//string interpulate 
a = 12;
b = 23;

console.log('sum of ' + a + " and " + b +" = "+ (a+b));

// interpulate using back tick
console.log(`back tick
sub of ${a} and ${b} = ${a+b}`);