import React from "react";
import API from "../../utils/API";

const Bestiary = (props) => {

    const deletePatch = (patchId) =>{
        API.deletePatch(patchId).then((resp) => {
            alert("Successfully recycled patch!");
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }

    return props.patches.length === 0 ? (
        <div className="bestiaryWrapper">
            <div className="bestiaryContainer">
                <h1>Bestiary</h1>
                <h2>All Patches Created so far!</h2>
                <div className="patchesContainer">
                    <p>Loading patches....</p>
                    <p>Error: {props.error}</p>
                </div>
            </div>
        </div>
    ) : (
            <div className="bestiaryWrapper">
                <div className="bestiaryContainer">
                    <h1>Bestiary</h1>
                    <h2>All Patches Created so far!</h2>
                    <div className="patchesContainer">
                        {props.patches.map((patch, idx) => {
                            var patchSrc = `/images/patches/${patch.pattern}_${patch.texture}.png`;
                            var patchId = patch.id;

                            return (
                                <div className="patchContainer" key={idx}>
                                    <div className="patchImageContainer">
                                        <p>"Patch Greeting here"</p>
                                        <img className="patchImageImage" src={patchSrc} />
                                    </div>
                                    <div className="patchNameCont">
                                        <h3><span class={patch.texture}>{patch.name}</span> the {patch.temperment}  <span class={patch.texture}>{patch.texture}</span> {patch.pattern}</h3>
                                    </div>
                                    <div className="patchCreatorCont">
                                        <h4>Creator: <span class={patch.texture}>{patch.creator}</span></h4>
                                    </div>
                                    <div className="patchOptions">
                                        <button>Speak</button> <button>Update</button> <button>Recycle</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
}

export default Bestiary;