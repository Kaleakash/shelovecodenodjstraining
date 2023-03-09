import { Link, Route, Routes } from "react-router-dom";
import AddStudent from "./AddStudent";
import ViewStudent from "./ViewStudent";

function AdminHome() {



    return(
        <div>
            <h2>Welcome to Admin Home Page</h2>
            <div className="App">
    <h2>React Routing Example</h2> 
    <Link to="/adminHome/addStudent">Add Student</Link> |
    <Link to="/adminHome/viewStudent">View Student</Link> |
    
    <hr/>
    </div>

        </div>
    )
}


export default AdminHome;