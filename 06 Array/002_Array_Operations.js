let names = ['Nayem', 'Jhon Doe', 'Peter', 'Ram Charan', 'Kartik Ariyan'];

console.log(names.length);


// accessing array element using foreach(item, index) function
names.forEach(function(item, index){
    console.log(`${index} => ${item}`);
});



let myNum = [1, 2, 3, 5, 7];
let sum = 0;
myNum.forEach(function(item, index){
    sum+=item;
})
console.log(sum);

// Adding element at last
/**
 * push
 */
names.push("Ranvir Kapoor");

console.log(names);

// remove last element
/**
 * pop() 
 */
console.log(names.pop());


// remove first element
/**
 * shift()
 */

console.log(names.shift());

//add element at front
names.unshift("Fahim");
console.log(names);

// remove element from any index
/**
 * splice(start, numberOfelement to remove)
 */

console.log(names.splice(0,3));