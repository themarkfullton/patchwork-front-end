import React from "react";
import { NavLink } from "react-router-dom";

const UpdateWorkshop = (props) => {
    var patchSrc = `/images/patches/${props.pattern}_${props.texture}.png`;

    return props.currentUpdateId === "" ? (
        <>
        <h1>Unassigned</h1>
            <button onClick={()=> props.toggleUpdate("I changed")}>Toggle</button>
        </>
    ) : (
            <>
        <h1>{props.currentUpdateId}</h1>
            <button onClick={()=> props.toggleUpdate("")}>Toggle</button>
            </>
        )
}

export default UpdateWorkshop;