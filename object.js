// Objects

// SINGLETON

// create object using literals when we create using litral its not singleton

const mysym = Symbol("key1") // symbol declaration

const Jsuser = {
    name : "Nikki",
    "Full Name" : "Nikita Turate",  // we can't access this using (.)
    [mysym] : "myky1", // syntax for symbol
    age : 25,
    location: "Pune",
    mail : "test@gmail.com",
    IsloggedIn : false,
    lastlogindays : ["Monday", "Saturday"]
}

//console.log(Jsuser);
//console.log(Jsuser.mail); // mostle we use (.) to access value
// console.log(Jsuser["mail"]); 
// console.log(Jsuser["Full Name"]);
//console.log(Jsuser[mysym]);

Jsuser.mail = "test@example.com"
//Object.freeze(Jsuser) // is used to freeze the object so that no one can change 
Jsuser.mail = "example@gmail.com"
//console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello Js User");
    
}

Jsuser.greetingTwo = function () {
    //console.log(`Hello Js User, ${this["Full Name"]}`); // it will return fullname
    console.log(`Hello Js User, ${this.name}`);
    
}

//console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo());






