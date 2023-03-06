import { useState } from "react";

function Child(props) {

let [childName,setChildName]=useState("Gollu");

    return(
        <div style={{backgroundColor:"yellow"}}>
            <h2>This is a child component</h2>
            <p>Child name in child component in jsx is {childName}</p>
            <p>Parent name in child component in jsx is {props.pName}</p>
            <p>{props.handleCallback(childName)}</p>
        </div>
    )
}


export default Child;