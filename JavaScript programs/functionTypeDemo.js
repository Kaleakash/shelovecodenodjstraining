// normal style function 
//display1();
function display1() {
    alert("Welcome to user defined function")
}
//display1();

// expression style function with name 

// var display2 = function display3() {
//     alert("This is expression style function ")
// }
// display2();

// expression style function without name 

//display4();
var display4 = function() {
   // alert("This is express style function")
   console.log("This is epxression style fuction")
}
display4();

// arrow function : no name for the function 
// in array function expression style function keyword replace by arrow 
var display5 = ()=>{
    console.log("This is arrow style funtion");
}
display5();

// addition of two number using expression style 
var addNumber1 = function(a,b){
    var sum = a+b;
    return sum;
}
console.log("Addition of two number using experssion style "+addNumber1(100,200));
// addition of two number using arrow style 
// by default arrow function return the value without return keyword. 
// if we want to write one line statement not requried curly braces. 
var addNumber2 = (a,b)=>a+b;
console.log("Addition of two number using arrow syle is "+addNumber2(100,200));
// find largest of two number using expression tyle 
var findLargest1  = function(a,b){
    if(a>b){
        return "a is largest"
    }else {
        return "b is largest"
    }
}
console.log("Largest of two number using expression "+findLargest1(10,20));

// find largest of two number using arrow style 
// if we write more than one statement in arrow we need to return the 
//using return keyword. 
var findLargest2  = (a,b)=>{
    if(a>b){
        return "a is largest"
    }else {
        return "b is largest"
    }
}
console.log("Largest of two number using arrow  "+findLargest2(10,20));

// callback function  : passing the function itself or function body or function 
//name to another function as a parameter is known as callback fucntion 
// callback can be sync or asyc 
function greeting(fname,callback){
    return "Welcome "+callback(fname);
}
var maleInfo = function(fname){
    return "Mr "+fname;
}
var femaleInfo = (fname)=>"Miss "+fname;

console.log(greeting("Raj",maleInfo))
console.log(greeting("Raj",maleInfo))
console.log(greeting("Seeta",femaleInfo));
console.log(greeting("Ajay",function(fname){
    return "Mr "+fname;
}));
console.log(greeting("Meeta",(fname)=>"Miss "+fname));
console.log(greeting("Meeta",(fname)=>"Hello "+fname));
console.log(greeting("Meeta",(fname)=>"Hi "+fname));

// Clouser function : it is a type of fucntion where we use inner function 
//concept. In Clouse function inner funtion can acess outer function scope 
// after outer function closer.
// function Outer() {
//     var a=10;
//     // coding..............
//     console.log("fun called..")
//     return ++a;
// } 

// console.log(Outer()) // function get called. 
// console.log(Outer()) // once again function get called. 
// console.log(Outer()) // once again function get called 

// Closure function 
// function Outer() {
//     var a=10;
//     console.log("fun called..")
//     function Inner() {
//         return ++a;
//     }
//     return Inner;
// }
// var obj = Outer();  // funtion get called. 
// console.log(obj())   // inner function keep the track about old state. 
// console.log(obj())  // inner function call from previous state rather than from begining 
// console.log(obj())

// IIFE : Imediate Invoke function expression 
// syntax 
// this type of function we can call only once while creationg. 
// so if we want to do any task only one time then we can use this type 
// of funtion 
//(functionbody)(callingfunction);
(function(){
    console.log("This is IIFE Function")
})();

(function(a,b){
    console.log(a+b)
})(10,20);

((a,b)=>console.log(a+b))(10,20);