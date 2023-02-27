import { useState } from "react";

function Simple(props) {
let name = useState("Ravi Kumar");
let fname = "Mahesh Kumar"
    return (<div>
            <h3>{props.msg}</h3>
            <p>User name is using useState {name}</p>
            <p>First name is using local variable {fname}</p>
            </div>)
}


export default Simple;