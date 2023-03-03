import { useState } from "react";
import axios from "axios";
function EmployeeStore() {
let [employeee,setEmployee]=useState({})        // state is a type of object 

let [_eid,setId]=useState(0);
let [ename,setName]=useState("");
let [eage,setAge]=useState(0);
let [esalary,setSalary]=useState(0);
let [ecity,setCity]=useState("");
let [edeptId,setDeptId]=useState(0);
let [msgInfo,setMessage]=useState("");

async function storeEmployee(event) {
    event.preventDefault();
    //console.log(employeee);
    let result = await axios.post("http://localhost:3000/api/employees/storeEmployee",employeee);
    //console.log(result);
    setMessage(result.data.msg);
    
}

async function storeEmployeeInfo(event) {
    event.preventDefault();
   let employee = {_id:_eid,name:ename,age:eage,salary:esalary,city:ecity,deptId:edeptId}
   console.log(employee)
   let result = await axios.post("http://localhost:3000/api/employees/storeEmployee",employeee);
   setMessage(result.data.msg);
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
        <span>{msgInfo}</span>
            <hr/>
            <form onSubmit={storeEmployeeInfo}>
            <label>Id</label>
        <input type="number" name="_eid" onChange={(event)=>setId(event.target.value)}/>
            <br/>
            <label>Name</label>
            <input type="text" name="ename" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <label>Age</label>
            <input type="number" name="eage" onChange={(event)=>setAge(event.target.value)}/>
            <br/>
            <label>Salary</label>
            <input type="number" name="esalary" onChange={(event)=>setSalary(event.target.value)}/>
            <br/>
            <label>City</label>
            <input type="text" name="ecity" onChange={(event)=>setCity(event.target.value)}/>
            <br/>
            <label>DeptId</label>
            <input type="number" name="edeptId" onChange={(event)=>setDeptId(event.target.value)}/>
            <br/>
            <input type="submit" value="store employee"/>
            <input type="reset" value="reset"/>    
        </form>   
        </div>
    )
}


export default EmployeeStore;