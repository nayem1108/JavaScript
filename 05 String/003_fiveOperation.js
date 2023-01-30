/**
 * 1. How to check equality of two string
 * 2. comparing two string
 * 3. replace certain word with another world
 * 4. accessing character - string[0]
 * 5. converting string to array using split function
 */

// 
let $_USERNAME = 'mrnayemuddin';
let $_FORMUSERNAME = 'mrnayemuddin';

if($_USERNAME === $_FORMUSERNAME)
    console.log('Enter your password: ');
else    console.log('username not valid.');


// using constructor
let $_USERNAME1 = new String('mrnayemuddin');
let $_FORMUSERNAME1 = new String('mrnayemuddin');

if($_USERNAME1 === $_FORMUSERNAME1)
    console.log('Enter your password: ');
else    console.log('username not valid.');

console.log($_USERNAME1);


//2 comparing two string

// localeCompare() compare with ASCII values
let s1 = 'A';
let s2 = 'B';
let res = s1.localeCompare(s2);
//exact matching: 0
// s1<s2: -1
//s1>s2: 1
console.log(res);
/**
 * A-Z: 65 - 90
 * a-z: 98 - 122
 * 0-48: 
 * charCodeAt(index) // return ASCII Values
 */
console.log(s1.charCodeAt(0));



let oldStr = "I love Java Java";
let newStr = oldStr.replace("Java", "JavaScript");

console.log(newStr);


/**
 * access character;
 */

for(let i = 0; i<newStr.length; i++){
    console.log(newStr.charAt(i));
}

/**
 * convert string to array
 */

let strArr = oldStr.split(" ");
console.log(strArr);
strArr = oldStr.split("");
console.log(strArr);