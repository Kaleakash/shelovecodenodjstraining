import { useContext } from "react";
import { MyContext } from "./Context";

function DisplayUsers() {
    let {users}=useContext(MyContext)


    return(
        <div>
            <h2>Display User</h2>
            {users.map((u,index)=><p key={index}>Name {u.name} Age{u.age}</p>)}
        </div>
    )

}

export default DisplayUsers;