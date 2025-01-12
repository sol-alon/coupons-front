import React, { useState } from "react";

function Exzample(){

    let[numUser,setNumUser] = useState<number>(0)

    function changeNum(event: React.ChangeEvent<HTMLInputElement>){
        setNumUser(+event.target.value)
    }

    return(
        <div >
        <input type="text" onChange={changeNum} />
        {numUser % 2 == 0 && <p>yes</p>};
        </div>
    )

    

}
export default Exzample;