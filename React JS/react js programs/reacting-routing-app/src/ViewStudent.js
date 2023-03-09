import axios from "axios";
import { useEffect, useState } from "react";


function ViewStudent() {
let [studentData,setStudentData]=useState([])
useEffect(()=> {
        async function loadStudentDetails() {
            let result = await axios.get("http://localhost:3000/api/students/findAllStudents",{
                headers:{"authorization":sessionStorage.getItem("token")}
            });
            //console.log(data);
            setStudentData(result.data);
        }
        loadStudentDetails();
},[])
    let studentRec = studentData.map(s=><li>id is {s._id} FName is {s.first_name} LName {s.last_name} Age {s.age} class {s.class}</li>)
    return(
        <div>
            <h2>View Student</h2>
            <ul>
                {studentRec}
            </ul>
        </div>
    )
}


export default ViewStudent;