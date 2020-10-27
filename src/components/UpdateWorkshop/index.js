import React from "react";
import API from "../../utils/API";
import { NavLink } from "react-router-dom";

const UpdateWorkshop = (props) => {

    return (
        <div>
            <p>Update Workshop</p>
            <p>{props.patchId}</p>
        </div>
    )
}

export default UpdateWorkshop;