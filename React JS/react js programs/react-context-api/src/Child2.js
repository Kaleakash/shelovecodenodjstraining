import { useContext } from "react";
import Child3 from "./Child3";
import { MyContext } from "./Context";

function Child2() {
let info = useContext(MyContext);

    return(
        <div>
            <h2>This is Child2 component</h2>
            <p>Name in child2 component using context api {info}</p>
            <Child3></Child3>
        </div>
    )

}


export default Child2;