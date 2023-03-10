import { useContext, useState } from "react";
import {MyContext} from './Context';

function AddUsers() {
let {dispatchUser}=useContext(MyContext)
let [name,setName]=useState();
let [age,setAge]=useState();

function addUser() {
    let user = {"name":name,"age":age};
    dispatchUser("ADD",{newUser:user});     // passing action as add and 2nd parameter data as user details ie name and age 
   // setName("");
   // setAge();
}
    return(
        <div>
            <h2>Add User</h2>
            <form>
            <label>Name</label>
            <input type="text" name="name"  onChange={(e)=>setName(e.target.value)}/><br/>
            <label>Age</label>
            <input type="number" name="age" onChange={(e)=>setAge(e.target.value)}/><br/>
            <input type="button" value="Add User" onClick={addUser}/>
            <input type="reset" value="reset"/>
            </form>
            
        </div>
    )

}

export default AddUsers;