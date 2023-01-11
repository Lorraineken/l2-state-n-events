import React, { useState } from "react";

function CountUp(){

    const [count, setcount ] = useState(0)

    // setInterval(() => {
    //     setcount(count +1)

    // },1000)

    return (
            <div>
                <center>
                    <h4 className="time-text">{count}</h4>
                </center>
            </div>
    )
}


export default CountUp