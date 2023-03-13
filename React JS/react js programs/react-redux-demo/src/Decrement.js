import { useDispatch} from "react-redux";

function Decrement() {
let dispatch = useDispatch();
    return(
        <div>
            <h2>Decrement Component </h2>
            <input type="button" value="Decrement" onClick={()=>{
                    dispatch({type:"DECREMENT",payload:""});
            }}/>
        </div>
    )
}


export default Decrement;