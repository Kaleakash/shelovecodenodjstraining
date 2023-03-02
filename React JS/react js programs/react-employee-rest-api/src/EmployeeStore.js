import { useState } from "react";
function EmployeeStore() {
let [employeee,setEmployee]=useState({})        // state is a type of object 

let [_id,setId]=useState(0);
let [name,setName]=useState("");
let [age,setAge]=useState(0);
let [salary,setSalary]=useState(0);
let [city,setCity]=useState("");
let [deptId,setDeptId]=useState(0);


async function storeEmployee(event) {
    event.preventDefault();
    console.log(employeee);
}

async function storeEmployeeInfo(event) {
    event.preventDefault();
   let employee = {_id:_id,name:name,age:age,salary:salary,city:city.deptId,deptId}
   console.log(employee)
}
    return(
        <div>
         <form onSubmit={storeEmployee}>
            <label>Id</label>
            <input type="number" name="_id" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"_id":event.target.value}
                })
            }}/>
            <br/>
            <label>Name</label>
            <input type="text" name="name" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"name":event.target.value}
                })
            }}/>
            <br/>
            <label>Age</label>
            <input type="number" name="age" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"age":event.target.value}
                })
            }}/>
            <br/>
            <label>Salary</label>
            <input type="number" name="salary" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"salary":event.target.value}
                })
            }}/>
            <br/>
            <label>City</label>
            <input type="text" name="city" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"city":event.target.value}
                })
            }}/>
            <br/>
            <label>DeptId</label>
            <input type="number" name="deptId" onChange={(event)=>{
                setEmployee(prevalue=> {
                    return {...prevalue,"deptId":event.target.value}
                })
            }}/>
            <br/>
            <input type="submit" value="store employee"/>
            <input type="reset" value="reset"/>    
        </form>   
            <hr/>
            <form onSubmit={storeEmployeeInfo}>
            <label>Id</label>
        <input type="number" name="_id" onChange={(event)=>setId(event.target.value)}/>
            <br/>
            <label>Name</label>
            <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <label>Age</label>
            <input type="number" name="age" onChange={(event)=>setAge(event.target.value)}/>
            <br/>
            <label>Salary</label>
            <input type="number" name="salary" onChange={(event)=>setSalary(event.target.value)}/>
            <br/>
            <label>City</label>
            <input type="text" name="city" onChange={(event)=>setCity(event.target.value)}/>
            <br/>
            <label>DeptId</label>
            <input type="number" name="deptId" onChange={(event)=>setDeptId(event.target.value)}/>
            <br/>
            <input type="submit" value="store employee"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default EmployeeStore;