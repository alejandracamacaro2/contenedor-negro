import React from "react";
import './Chicos.css'

function Chicos ({imagen="chicos"}) {
    return(
        <div>
<div className="chicos">
    <img src={imagen} />
</div>
        </div>
    )
}
export default Chicos