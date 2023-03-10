import { useContext } from "react";
import { MyContext } from "./Context";

function Child1() {
    let data = useContext(MyContext);       // pull the reference with help of useContext
    return(
        <div>
            <h2>This is Child1 component</h2>
            <p>Name is child1 component using context api {data}</p>
        </div>
    )

}


export default Child1;