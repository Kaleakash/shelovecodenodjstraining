// to create function style we need to use function keyword 
// Till ES5 to create user defined object we are using funciton keyword. 
// function name must be start with first letter upper case 
// and function name must be meaningfull base objet. 
// like Employee, Customer, Manager, Product, Order, Account etc. 
// to write the object in fucntion sytle we need to use this keyword 
// this is a keyword which refere to current object. 
// function Employee() {
//     this.id = 100;                  // id,name,age consider as Employee objec property 
//     this.name ="Ravi";
//     this.age = 21;
//     var designation ="Tester";          // local variable consider not object property 
//     this.info = function() {            // employee object behaviour 
//         document.write("<br/>info is employee object function or behaviour ")
//     }
//     this.display= function() {
//         document.write("<br> Employee detaisl are ")
//         document.write("<br> Id is "+this.id);
//         document.write("<br> Name is "+this.name);
//         document.write("<br> Age is "+this.age);
//         document.write("<br> Designation is "+designation);
//     }
// }
// //Employee();
// var emp1 = new Employee();      // memory created.. 
// var emp2 = new Employee();
// document.write("<br/> Employee Details are ");
// document.write("<br/> id is "+emp1.id);
// document.write("<br/> name is "+emp1.name);
// document.write("<br/> age is "+emp1.age);
// document.write("<br/> id is "+emp2.id);
// document.write("<br/> name is "+emp2.name);
// document.write("<br/> age is "+emp2.age);
// //document.write("<br> Age "+age);
// document.write("<br> Designation "+emp1.designation);
// emp1.info();    // document.write();
// emp1.display();

// user defined object creation using parameter 


function Employee(id,name,age) {
    this.id = id;                  // id,name,age consider as Employee objec property 
    this.name =name;
    this.age = age;
    var designation ="Tester";          // local variable consider not object property 
    this.info = function() {            // employee object behaviour 
        document.write("<br/>info is employee object function or behaviour ")
    }
    this.display= function() {
        document.write("<br> Employee detaisl are ")
        document.write("<br> Id is "+this.id);
        document.write("<br> Name is "+this.name);
        document.write("<br> Age is "+this.age);
        document.write("<br> Designation is "+designation);
    }
}

var emp1 = new Employee(100,"Vijay",24);
var emp2 = new Employee(101,"Mahesh",26);

document.write("<br/> First Employee details");
document.write("<br/> id is "+emp1.id);
document.write("<br/> name is "+emp1.name);
document.write("<br/> age is "+emp1.age);
document.write("<br/> Second Employee details");
document.write("<br/> id is "+emp2.id);
document.write("<br/> name is "+emp2.name);
document.write("<br/> age is "+emp2.age);
//document.write("<br> Age "+age);
emp1.display();
emp2.display();



