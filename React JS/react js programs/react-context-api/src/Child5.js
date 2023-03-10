import { useContext } from "react";
import { MyContext } from "./Context";

function Child5() {
    let data = useContext(MyContext);       // pull the reference with help of useContext
    return(
        <div>
            <h2>This is Child5 component</h2>
            <p>Name is child5 component using context api {data}</p>
        </div>
    )

}


export default Child5;