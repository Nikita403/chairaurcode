// Premitive (Call by Value which mean if we change value of any variable it will change vale after creating
//  copy ph that variable it will not change origibnal value)

// 7 types : Number, String, BingInt, Boolean, null, undefined, Symbol

const score = 100;
const scoreValue = 100.2;
let Name = "abcde";
const IsloggedIn = false;
const outsideTemp = null;
let useremail;

const id = Symbol('123');
const anotheris = Symbol('123');

console.log(id);
console.log(anotheris);
console.log(id === anotheris);



// Non-prmitive (call by reference)

// Array, object, function

const heros = ["shaktiman","nagraj","dora"]
const myObj = {
    name : "Nikki",
    age: 30
}
const myfunc = function (){
    console.log("Hello World");
    
}