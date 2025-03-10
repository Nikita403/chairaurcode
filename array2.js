
const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "flash", "batman"];
//const heros = ["Shaoktiman", "Doora", "JumanJi"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

const allheros = [...marvel_heros, ...dc_heros]; // we can add many as we want to concat using spread operator (...) mostly use instead on concat
//console.log(allheros);

const anothr_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anothr_array.flat(Infinity); // instead of infinity u can also as depth of array lie 3,4, 5 and so on 
//console.log(real_another_array);

const nameArray = "Nikki";
//console.log(Array.isArray("Nikki"));
//console.log(Array.from("Nikki"));

console.log(Array.from({name: "Nikki"})); // interesting topic it will return empty array to get meaningful output need to tell
//  we nee key array or value array

let score = 100;
let score1 = 200;
let score2 = 300;
let score3= 400;
let score4 = 500;

//console.log(Array.from(score, score1));


console.log(Array.of(score, score1, score2, score3, score4));





