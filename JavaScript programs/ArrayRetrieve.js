var num1 =[10,11,20,21,30,,31,40,41,50,51,60,61];
console.log(num1);  // display as a sting format separated by ,
console.log(num1.join("-"));
console.log(num1.join("->"));
console.log(num1[0])
console.log(num1[1])
// retrive the element using index position 
console.log("using for loop retrieve value one by one") // we can customize this loop 
for(let i=2;i<num1.length;i=i+2){
    console.log(num1[i])
}
console.log("using for in loop")        // we can get index and using index we can get the value 
for(let i in num1){             // we have to retrive element one by one 
    console.log("Index position "+i+" Value is "+num1[i]);
}
console.log("using for of loop");       // we get only value no index. 
for(let n of num1){
    console.log(n)
}
// using forEach function from array with normal style function  
num1.forEach(display)

function display(v,i){
    console.log("value "+v+" index "+i)
}

num1.forEach(function(v,i){
    console.log("value "+v+" index "+i)
});

num1.forEach((v,i)=>console.log("value "+v+" index "+i));

num1.map(v=>v+100).forEach(n=>console.log(n));
num1.filter(v=>v%2==0).forEach(n=>console.log(n));
num1.filter(v=>v%2!=0).forEach(n=>console.log(n));