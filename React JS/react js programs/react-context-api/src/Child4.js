import { useContext } from "react";
import Child5 from "./Child5";
import { MyContext } from "./Context";

function Child4() {
    let data = useContext(MyContext);       // pull the reference with help of useContext
    return(
        <div>
            <h2>This is Child4 component</h2>
            <p>Name is child4 component using context api {data}</p>
            <Child5></Child5>
        </div>
    )

}


export default Child4;