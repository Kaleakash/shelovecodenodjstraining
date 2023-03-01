import { useState } from "react";
function Login() {
let [emailid,setEmailiId]=useState("");
let [password,setPassword] = useState("");
function changeVaue(event) {
    //console.log("event fired")
    //console.log(event);
    let name = event.target.name;   // tag name attribute 
    let value = event.target.value; // tag value attibute 
    //console.log(name+" "+value);
    if(name=="emailid"){
        setEmailiId(value);
    }
    if(name=="password"){
        setPassword(value);
    }
}
function submitValue(event){
    event.preventDefault();
    console.log("value submitted");
    if(emailid=="raj@gmail.com" && password=="123"){
        alert("successfully login")
    }else {
        alert("failure try once again")
    }
}
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={submitValue}>
                <label>EmailId</label>
                <input type="emailid" name="emailid" onChange={changeVaue}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={changeVaue}/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/>
            </form>
            <h2>Logine page</h2>
            <form onSubmit={submitValue}>
                <label>EmailId</label>
                <input type="emailid" name="emailid" onChange={(event)=>setEmailiId(event.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default Login;