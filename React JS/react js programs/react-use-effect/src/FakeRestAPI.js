import { useEffect, useState } from "react"

function FakeRestAPI() {
let [message,setMessage]=useState("");
let [id,setId]=useState(5);
useEffect(()=> {

   async function loadFakeRestAPI() {
    let response = await fetch(`http://numbersapi.com/${id}/math`);
    let result = await response.text();
        setMessage(result);
   }

   loadFakeRestAPI();
},[id])
    return(
        <div>
            <h2>Fake REST API Using useEffect</h2>
            <input type="text" name="id" onKeyUp={(e)=>setId(e.target.value)}/><br/>
            <p>{message}</p>
        </div>
    )
}

export default FakeRestAPI;