import { useState } from "react";
import Child from "./Child";

function Parent() {
let [parentName,setParentName]=useState("Ajay Kumar");
let [cName,setCName]=useState("");
function callbackFun(data){
    console.log(data);
    setCName(data);
}
    return(
        <div style={{"backgroundColor":"pink"}}>
            <h2>This is a parent component</h2>
            <p>Parent name in parent component jsx is {parentName}</p>
                 <Child pName={parentName} handleCallback={callbackFun}></Child>
            <p>This is parent compoenent area</p>
            <p>Child name in parent component jsx is {cName}</p>
        </div>
    )
}


export default Parent;