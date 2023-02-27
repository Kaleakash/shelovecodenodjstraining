import { useState } from "react";

function Employee() {
let [id,setId]=useState(100);       // it hold only one value 
let [name,setName]=useState("Ramesh");  // it hold only one value 
let [salary,setSalary]=useState(8000);  // it hold only one value 
let [emp,setEmp]=useState({id:0,name:"",salary:0.0});   // state complex property 
function fun1(){
    alert("Event generated")
} 
function fun2() {
    setId(200);
    setName("Ravi");
    setSalary(12000);
}
function changeEmpInfo() {
    setEmp({id:100,name:"Ramesh",salary:45000})
}
return(<div>
        <h2>useState with events</h2>
        <h3>Using state variable primitive property</h3>
        <p>Id is {id} Name is {name} Salary is {salary} </p>
        <h3>Using state variable complex property</h3>
        <p>Id is {emp.id} Name is {emp.name} Salary is {emp.salary}</p>
        <input type="button" value="Click here" onClick={fun1}/><br/>
        <input type="button" value="Change employee details using external function" onClick={fun2}/><br/>
        <input type="button" value="Change employee details inline function" onClick={ ()=>{
             setId(300);
             setName("Ramesh");
             setSalary(16000);
        }
        
        }/>
        <br/>
        <input type="button" value="Change Employee details using external function" onClick={changeEmpInfo}/>    
        <br/>
        <input type="button" value="Change Employee details using internal function" onClick={()=> {
            setEmp({id:101,name:"Mahesh",salary:25000})
        }}/> 
        <br/>
        <input type="button" value="Change Employee id using internal function" onClick={()=> {
            //setEmp({})    
            setEmp(prevState=> {
                return {...prevState,id:111}
            })
        }}/> 
      </div>)
}

export default Employee;