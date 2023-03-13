import { useSelector } from "react-redux";

function Child1() {
let child1Counter = useSelector(globalstate=>globalstate.counter)
    return(
        <div>
            <h2>This is child1 component</h2>
            <p>Global state variable in child1 component is {child1Counter}</p>
        </div>
    )
}


export default Child1;