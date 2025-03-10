// Array

const myArr = [0,1,2,3,4,5];
const Heros = ["shaktiman", "naagraj", "doora"];
const mynewarray = new Array(1,3,5);
//console.log(myArr[1]);
//console.log(Heros);
//console.log(typeof Heros);
//console.log(mynewarray.length);

// Array Methos

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(8)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(3));



const newarray = myArr.join();
//console.log(myArr);
//console.log(newarray);
//console.log(typeof newarray);

// Important Topic Slice and Splice

const myn1 = myArr.slice(1,3); // it will not include range i.e it will return 2 value of index 1 and 2 
console.log("A ", myArr);
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1,3); // Splice manipulate the original array
console.log(myn2);
console.log("C ", myArr); 



