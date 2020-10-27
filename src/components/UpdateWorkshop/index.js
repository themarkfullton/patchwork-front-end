import React from "react";
import Bestiary from "../Bestiary";
import { NavLink } from "react-router-dom";

const UpdateWorkshop = (props) => {
    return props.showUpdate === false ? (
        <div className="updateWorkshopContainer">
            <Bestiary patches={props.patches} toggleUpdate={props.toggleUpdate} />
        </div>
    ) : (
        <div className="updateWorkshopContainer">
                <p>Why are you loading this one?</p>
                <p>{props.currentUpdateId}</p>
        </div>
        )
}

export default UpdateWorkshop;