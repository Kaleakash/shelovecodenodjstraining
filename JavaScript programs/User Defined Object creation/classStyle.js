// class Employee {
//     id=100;
//     name="Ravi";
//     age = 21;
//     disEmpInfo(){
//         document.write("<br/> class style behaviour of Employee class ")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }

// let emp1 = new Employee();
// let emp2 = new Employee();
// document.write("<br> id "+emp1.id);
// document.write("<br> name "+emp1.name);
// document.write("<br> age "+emp1.age);
// emp1.disEmpInfo();


// document.write("<br> id "+emp2.id);
// document.write("<br> name "+emp2.name);
// document.write("<br> age "+emp2.age);
// emp2.disEmpInfo();

// class Employee {

//     constructor() {
//         document.write("<br/> Object created...")   
//     }

//     disEmpInfo() {
//         document.write("<br/>this is employee class function or behaviour")
//     }
// }

// let emp1 = new Employee();
// let emp2  = new Employee();
// emp1.disEmpInfo();
// emp1.disEmpInfo();
// emp2.disEmpInfo();
// emp2.disEmpInfo();

// parameterized constructor 
class Employee {

        constructor(id,name,age) {
            this.id = id;
            this.name = name;
            this.age = age;
            document.write("<br/> Object created...")   
        }
    
        disEmpInfo() {
            document.write("<br/>this is employee class function or behaviour")
            document.write("<br/> Id is "+this.id);
            document.write("<br/> Name is "+this.name);
            document.write("<br/> Age is "+this.age);
        }
    }
    
    let emp1 = new Employee(1,"Ravi",21);
    let emp2  = new Employee(2,"Ramesh",25);
    emp1.disEmpInfo();
    emp2.disEmpInfo();












