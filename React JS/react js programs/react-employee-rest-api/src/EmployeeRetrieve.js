import axios from "axios";
import { useState } from "react";

function EmployeeRetrieve() {
let [employees,setEmployees]=useState([]);

// async function loadEmployeeData() {
//     try{
//     let result = await axios.get("http://localhost:3000/api/employees/getEmployee");
//     console.log(result.data);
//     setEmployees(result.data);
//     }catch(ex){
//         console.log(ex);
//     }
// }
//     let empRec = employees.map(e=><li key={e._id}>Id is {e._id} Name is {e.name} age is {e.age} salary is {e.salary} city is {e.city}</li>)
//     return(
//         <div>
//             <h2>Employee details are</h2>
//             <input type="button" value="Load Data" onClick={loadEmployeeData}/>
//             <hr/>
//             <ol>
//             {empRec}
//             </ol>           
//         </div>
//     )
// }

async function loadEmployeeData() {
    try{
    let result = await axios.get("http://localhost:3000/api/employees/getEmployee");
    console.log(result.data);
    setEmployees(result.data);
    }catch(ex){
        console.log(ex);
    }
}
    let empRow = employees.map(e=><tr key={e._id}><td>{e._id}</td><td>{e.name}</td><td>{e.age}</td><td>{e.salary}</td><td>{e.city}</td></tr>)
    return(
        <div>
            <h2>Employee details are</h2>
            <input type="button" value="Load Data" onClick={loadEmployeeData}/>
            <hr/>
            <table border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {empRow}
                </tbody>
            </table>              
        </div>
    )
}


export default EmployeeRetrieve;