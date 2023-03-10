import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { MyContext } from "./Context";
function Parent() {
let [name,setName]=useState("Ajay Kumar");

    return(
        <MyContext.Provider value={name}>
            <div>
        <h2>In Parent component name is {name}</h2>
                <h2>This is parent component</h2>
                <Child1></Child1>
                <Child2></Child2>
            </div>
        </MyContext.Provider>
    )

}


export default Parent;