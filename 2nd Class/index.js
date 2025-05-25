/*
//Classes in javascript
class Rectangle {
    constructor(width,height,color){
       this.width=width;
       this.height=height;
       this.color=color; 
    }
    area(){
        const area =this.width*this.height;
        return area;
    }
    paint(){
        console.log(`The rectangle is painted with ${this.color} color`);
    }
}
const rect=new Rectangle(2,4,"Blue");
const rect2=new Rectangle(3,4,"Black");
const rect3=new Rectangle(5,4,"White");
const area=rect.area();
const paint=rect.paint();
const area2=rect2.area();
const paint2=rect2.paint();
const area3=rect3.area();
const paint3=rect3.paint();
console.log(area);
console.log(area2);
console.log(area3);
//This variable gives you acces to the current object inside the constructor
//New variable create a new instance and this variable is refering to that instance
*/

//Used some js provided classes(date,map)
/*
let user={
    name:"Anurag",
    age:22
}
console.log(user.name);

*/

/*
//Date class
const d=new Date();
console.log(d.getFullYear()); 
*/

/*
//Now by using map class
const map=new Map();
map.set('name','Anurag');
map.set('age',20);
console.log(map.get('name'));
console.log(map.get('age'));
*/

//We are going to introduce the promise class
//Promise is a class in js that helps us to handle asynchronous operations
//Promise class gives u a promises,that i will return u something in a future
/*
function logname(){
    console.log("Anurag"); 
}
setTimeout(logname,3000);
*/

/*
function main(){
    
}
setTimeout(main,3000);//Callback based approach 
*/
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
//Syntax promisified version
//setTimeoutPromisified(300).then(callback)
//Syntax callback version
//setTimeout(Callback,3000);

/*
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  //Returning the object of promise class
}

function callback() {
	console.log("3 seconds have passed");
}
 
let ans=setTimeoutPromisified(3000).then(callback)
console.log(ans);
*/
/*
//Exmaple
function waitForsec(resolve){
    setTimeout(resolve,3000);
}
function main(){
    console.log("Main is called");
}
waitForsec(main);*/
 

/*
//Example 2
function me(resolve){
    setTimeout(resolve,3000);
}
function you(){
    console.log("You are called");
}
me(you);
*/
/*
//Example 3
function random(resolve){//resolve is a function
    setTimeout(resolve,3000);
}
let p =new Promise(random);

function callback(){
    console.log("Callback is called");
}
p.then(callback)
*/

/*
//Self example 04
let myPromises=new Promise(function(resolve,reject){
    let isHomeworkDone=true;
    if(isHomeworkDone){
        resolve("Good boi")
    }
    else{
        reject("Bad boi")
    }
});
myPromises.then(function(result){
    console.log(result);//If resolved 
}).catch(function(error){
    console.log(error);//if reject
})
*/
/*
//Example 05 
const p=new Promise(function(resolve){//defining promise
    let c=0;
    for(let i=0;i<10000;i++){
        c++;
    }
    resolve();
});
function callback(){
    console.log("Callback is called");
}
p.then(callback);
  */
//Create the promisified version of fs.readFile,fs.writeFile,cleanFile

//Understanding in easy way callback vs promises
// ✅ Using Callback:
// You tell the cook:

// "When the burger is ready, call me."

// You give him your phone number. That’s a callback function.
/*
function getBurger(callback) {
  setTimeout(() => {
    callback("Burger is ready 🍔");
  }, 2000);
}

getBurger(function(result) {
  console.log(result); // Burger is ready 🍔
});

// 🔁 Problem with callback: If you order fries, drink, and burger — too many callbacks get nested like:
getBurger(function(burger) {
  getFries(function(fries) {
    getDrink(function(drink) {
      // 😵 Messy code!
    });
  });
});
// This is called "Callback Hell".
*/

/*
// ✅ Using Promise:
// Now you say:

// "Send me a message when it’s done."

// You don’t give a number. The cook promises to inform you.
function getBurger(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Burger is ready");
        },2000);
    });
}
getBurger().then(function(result){
    console.log(result);//burger is ready
})
//Here is chaining is easy 
getBurger()
.then(getDrink)
 .then(getFries)
  .then(result => console.log("All done! 🍔🍟🥤"))
  .catch(error => console.log("Something went wrong!"));
  */

//  🧠 Final Words:
// Use callbacks for small, simple things.

// Use promises for cleaner, better code — especially when many things happen one after another.

/*
| Feature        | Callback                      | Promise                            |
| -------------- | ----------------------------- | ---------------------------------- |
| Syntax         | Old-style, nested             | Cleaner, easier to read            |
| Error Handling | Hard to manage                | `.catch()` for easy error handling |
| Problem        | Callback hell 😖              | Easy chaining 🙂                   |
| Modern Use     | Not recommended for big tasks | Preferred way in modern JS         |
*/