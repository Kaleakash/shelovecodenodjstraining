// in JavaSript we can create array more than one way 
let num1 = [];      // literal style 
let num2 = new Array() // using ney keyword.
let num3 = [10,20,30,40,50] 
let num4 = new Array(10,20,30,40,50);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num3.length)
num3.push(100);
num3.push(200);     // add at last 
num3.unshift(300);  // add at the begining 
num3.unshift(400);
console.log(num3);
num3.pop();     //remvove from a last 
num3.shift();   //remove from begining 
console.log(num3);
console.log("--------------------")
console.log(num3);
// splice 
//1st parameer index postion 
// 2nd parameer number of element to delete 
// 3rd to n parameter number of element add. 
//num3.splice(2,1);    // remove 2nd index position element only one 
//num3.splice(2,3);     // from 2nd index postion remove 3 element 
//num3.splice(2,1,1000); // in 2nd index position add 1000 or 2nd index position element replace by 1000
//num3.splice(2,0,1000); // add element in 2nd index position 
num3.splice(2,0,1000,2000,3000);
console.log(num3);