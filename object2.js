const tinderuser = new Object();
// const Tinderuser = {} // same 

tinderuser.id = "123dcgr",
tinderuser.name = "nikki",
tinderuser.isloggedIn = false
//console.log(tinderuser);

const regularuser = {
    email : "test@gmail.com",
     fullname : {
        userfullname : {
            firstname : "Nikki",
            lastname : "Turate"
        }
     }
}

//console.log(regularuser.fullname.userfullname);
//console.log(regularuser.fullname.userfullname.firstnmae);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1, obj2} // output { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
//console.log(obj4);
const obj5= Object.assign({}, obj1, obj2, obj3)
//console.log(obj5);

const obj7 = {...obj1, ...obj2, ...obj3}
//console.log(obj7);

console.log(tinderuser);
//console.log(Object.keys(tinderuser)); // return array or key ['id', 'name', 'isloggedIn]
//console.log(Object.values(tinderuser)); // return array of values ['123dcgr', 'nikki', false]
//console.log(Object.entries(tinderuser)); // return array of key value pair array [['id', '123dcgr'], ['name', 'nikki], ['isloggedIn', false]]

console.log(tinderuser.hasOwnProperty('name')); // return boolean value i.e true
console.log(tinderuser.hasOwnProperty('age')); // return boolean value i.e false









