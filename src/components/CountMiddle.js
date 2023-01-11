import React, { useState } from "react";

function CountMiddle(){

 const [count, setcount] = useState(0)

 function clicked(){
    setcount(count + 1 )
 }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={() => setcount(count + 1)}>CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle