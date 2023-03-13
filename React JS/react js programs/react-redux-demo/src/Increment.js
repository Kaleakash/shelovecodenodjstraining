import { useDispatch} from "react-redux";

function Increment() {
let dispatch = useDispatch();
    return(
        <div>
            <h2>Increment Component </h2>
            <input type="button" value="Increment" onClick={()=>{
                    dispatch({type:"INCREMENT",payload:""});
            }}/>
        </div>
    )
}


export default Increment;