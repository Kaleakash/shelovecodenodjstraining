import { useState } from "react";
import { useDispatch} from "react-redux";

function Increment() {
let [cc,setCC]=useState(100);
let dispatch = useDispatch();       // dispatch help us to all reducer funtion and pass action and payload.
    return(
        <div>
            <h2>Increment Component </h2>
            <input type="button" value="Increment" onClick={()=>{
                    dispatch({type:"INCREMENT",payload:cc});
            }}/>
        </div>
    )
}


export default Increment;