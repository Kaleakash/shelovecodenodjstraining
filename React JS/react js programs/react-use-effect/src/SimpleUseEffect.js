import { useEffect, useState } from "react";

function SimpleUseEffect() {
let[id,setId]=useState(0);
let [name,setName]=useState("");
// useEffect(()=>{
//     console.log("Event fired using useEffect") 
// });

useEffect(()=>{
    console.log("Event fired using useEffect") 
},[id,name]);
function sayHello() {
    console.log("Event fired by button")
}
    return(
        <div>
            <h2>Simple useEffect Example</h2>
            <input type="button" value="Click here" onClick={sayHello}/>
            <hr/>
            <p>Id is {id} Name is {name}</p>
            <input type="button" value="Change id" onClick={(e)=>setId(id+1)}/>
            <input type="button" value="Change name" onClick={(e)=>setName("Ravi")}/>
        </div>
    )
}


export default SimpleUseEffect;