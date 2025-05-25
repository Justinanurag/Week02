//Find the sum of two number
/*
function sum(a,b){
    return a+b;
}
let ans=sum(2,5)
console.log(ans);
*/
//If number is in string format, convert it to number before using it in the function
/*
function sum(a,b){
    return parseInt(a)+parseInt(b);
}
let ans=sum("2","5")
console.log(ans);
*/

/*
//Find the sum from 1 to n;
function sum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans = ans+i;
    }
    return ans;
}
console.log(sum(10));
*/

//Synchronous code is executed line by line,in order its written.Each operation wait for the previous one to finish before proceeding.
/*
//Learning new thing That is file system module
const fs=require('fs')//fs-> node js file system
const data=fs.readFileSync('./a.txt','utf-8');
const beta=fs.readFileSync('./b.txt','utf-8');
console.log("This is from 1st file",data);
console.log("This is from 2st file",beta);
*/
/*
//Functional arguments
//Arguments are passed to a function in the order they are written in the function definition
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function doOperation(a,b,op){
    let val=op(a,b)
    return val;
}
const ans=doOperation(1,2,sum);
console.log(ans);

*/
/*
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
*/
function timeout(){
    console.log("Click button");
}
console.log("Hello there");
setTimeout(timeout,3000);
console.log("Welcome there");
let c=0;
for(let i=0;i<10;i++){
    c++;
}
console.log("Expensive task",c);


