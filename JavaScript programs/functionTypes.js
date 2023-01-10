//alert("Welcome")

// normal type of function 
// function no passing parameter and no return type 
function info() {
    document.write("<br/>Welcome user defined fucntion")
    //alert("Welcome to user defined function ")
}
info();
// function passing parameter but no return type 
function add(a,b){
    var sum = a+b;
    document.write("<br/>sum of two number is "+sum)
    //alert("sum of two number is "+sum);
}
add(100,200);
// function passing parameter and return value 
function sayHello(name){
    // code 
    return "Welcome user "+name;
}
var result = sayHello('Ravi');
document.write("<br/>"+result);
// function no passing parameter but return value 
function getNumber() {
    return Math.random();
}

document.write("<br/>"+getNumber())