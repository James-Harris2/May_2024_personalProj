// Data Types -  7 total

// // Primitive
// // Objects
// // typeOf
// // String
// const text = 'some text'
// // Number
// const Number = 46; 

// // Boolean
// console.log();
// // Null
// // Undefined
// // Symbol

// console.log(typeof text);
// console.log(typeof Number);


// Array, Functions and Objects
// Array - [], 0 index based

// const friend1 = 'Scarlett';
// const friend2 = 'James';
// const friend3 = 'Jackson';
// const friend4 = 'Dad';
// const friend5 = 'Mom';


const friends = ["james","john","pete",46, 99, 100 ];

friends[4] = 'Dobby'

console.log(friends[0]);
console.log(friends[4]);


//  Functions
// 1
function hello(){
    console.log('Hello James');
    console.log('Hello Kids');
    console.log('Hello family');
}
hello()
// repeating code is not DRY
// 2
function helloJH(){
    console.log('Hello JH');
}
helloJH()

// Params- when declared/define
// Placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

function greet(name){
    console.log('hello there ' + name);
}

greet('what"s up James')
greet('Dobby')



const wallHeight = 80;


function calculate(value){
console.log('the value in cm is: ' + (value * 2.54 + ' cm'));
    return('hello world')
}
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height]
console.log(dimensions);