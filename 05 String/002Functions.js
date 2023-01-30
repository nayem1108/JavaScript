/**
 * 10 string functions
 */


/**
 * 1. lenght is not a function, it's a litteral
 */

let s1 = 'Hello world Java';
console.log(s1);

let length = s1.length;
console.log("s1 length = ", length);

/**
 * 1. concat();
 */

let s = 'and js';

let concat = s1.concat(s);
let concat1 = s1.concat(" ",s);
console.log(concat);
console.log(concat1);

/**
 * 2. charAt(index)
 */

let char = s1.charAt(2);
console.log(char);

/**
 * 3. indexOf('character')
 * return first
 */

console.log(s1.indexOf('l'));

/**
 * 4. lastIndexOf('character')
 */

console.log(concat.lastIndexOf('j'));

/**
 * 5. toUpperCase();
 */

console.log(concat.toUpperCase());

/**
 * 6. toLowerCase()
 */

console.log(concat.toLowerCase());

/**
 * 7. substring(start, end)  start to end-1
 */

console.log(concat.substring(2, 6));  // 

/**
 * 8. startWith()
 */

console.log(s.startsWith("and"));

/**
 * 9. endsWith()
 */
console.log(concat.endsWith("js"));

/**
 * 10. split(" ");
 */

let sp = concat.split(" ");
console.log(sp[0]);

/**
 * 11. trim() // remove front and rare spaces
 */

let t1 = "  hi  ";
console.log(t1);
console.log(t1.trim());



