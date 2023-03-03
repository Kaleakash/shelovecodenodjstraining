import axios from "axios";
import { useState } from "react";

function DeleteEmployeeRecord() {
let [msgInfo,setMsgInfo]=useState("")
let [_id,setId]=useState(0);
async function deleteEmployee() {
    let result = await axios.delete("http://localhost:3000/api/employees/deleteEmployeeById/"+_id)   
    setMsgInfo(result.data.msg);
}
    return(
        <div>
            <h2>Delete Employee by Id</h2>
            <label>Employee Id</label>
            <input type="search" name="_id" onChange={(event)=>setId(event.target.value)}/><br/>
            <input type="button" value="Search Emmployee" onClick={deleteEmployee}/>
            <br/>
            {msgInfo}
            
        </div>
    )
}


export default DeleteEmployeeRecord;