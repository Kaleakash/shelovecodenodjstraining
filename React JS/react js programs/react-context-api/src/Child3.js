import { useContext } from "react";
import Child4 from "./Child4";
import { MyContext } from "./Context";

function Child3() {
    let data = useContext(MyContext);       // pull the reference with help of useContext
    return(
        <div>
            <h2>This is Child3 component</h2>
            <p>Name is child4 component using context api {data}</p>
            <Child4></Child4>
        </div>
    )

}


export default Child3;