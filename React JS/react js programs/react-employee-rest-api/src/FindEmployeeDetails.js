import axios from "axios";
import { useState } from "react";

function FindEmloyeeDetails() {
let [employee,setEmployee]=useState("");
    let [msgInfo,setMsgInfo]=useState("")
 let [result,setResult]=useState(false);
let [_id,setId]=useState(0);
async function searchEmployee() {
    let result = await axios.get("http://localhost:3000/api/employees/findEmployeeById/"+_id)
    if(result.data.msg=="Record present"){
                setResult(true);
            setEmployee(result.data.employee)
    }else {
        setResult(false);
    }
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Search Employee Id</h2>
            <label>Employee Id</label>
            <input type="search" name="_id" onChange={(event)=>setId(event.target.value)}/><br/>
            <input type="button" value="Search Emmployee" onClick={searchEmployee}/>
            <br/>
            {msgInfo}
            <br/>
            {result?"Employee Id is "+employee._id+"Name is "+employee.name:""}
        </div>
    )
}


export default FindEmloyeeDetails;