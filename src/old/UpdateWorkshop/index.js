import React from "react";
import API from "../../utils/API";
import { NavLink } from "react-router-dom";

const UpdateWorkshop = (props) => {

    return props.updatingPatch === false ? (
        <div className="updateWorkshopContainer">
            <h1>Bestiary</h1>
                    <h2>All Patches Created so far!</h2>
        <div className="patchesContainer">
            <div className="patchesDiv">
                        {props.patches.map((patch, idx) => {
                            var patchSrc = `/images/patches/${patch.pattern}_${patch.texture}.png`;
                            var patchId = patch.id;

                            return (
                                <div className="patchContainer" key={idx}>
                                    <div className="patchImageContainer">
                                        <p className="patchGreeting">{patch.greeting}</p>
                                        <img className="patchImageImage" src={patchSrc} />
                                    </div>
                                    <div className="patchNameCont">
                                        <h3><span className={patch.texture}>{patch.name}</span> the {patch.temperment}  <span className={patch.texture}>{patch.texture}</span> {patch.pattern}</h3>
                                    </div>
                                    <div className="patchCreatorCont">
                                        <h4>Creator: <span className={patch.texture}>{patch.creator}</span></h4>
                                    </div>
                                    <div className="patchOptions">
                                        <button onClick={props.toggleUpdate(patchId)}>
                                            Update
                                        </button>
                                        <button className="recycleButton" onClick={props.deletePatch}>Recycle</button>
                                    </div>
                                </div>
                            );
                        })}
            </div>
        </div>
        </div>
    ) : (
        <div className="updateWorkshopContainer">
                <p>Why are you loading this one?</p>
                <p>{props.updatingPatch}</p>
        </div>
    )
}

export default UpdateWorkshop;