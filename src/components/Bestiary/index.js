import React from "react";

const Bestiary = (props) => {

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
                                        <p className="patchGreeting">{patch.greeting}</p>
                                        <img className="patchImageImage" src={patchSrc} />
                                    </div>
                                    <div className="patchNameCont">
                                        <h3><span class={patch.texture}>{patch.name}</span> the {patch.temperment}  <span class={patch.texture}>{patch.texture}</span> {patch.pattern}</h3>
                                    </div>
                                    <div className="patchCreatorCont">
                                        <h4>Creator: <span class={patch.texture}>{patch.creator}</span></h4>
                                    </div>
                                    <div className="patchOptions">
                                        <button onClick={() => props.toggleUpdate(patchId, patch.name,  patch.pattern, patch.texture, patch.greeting, patch.temperment)}>
                                            Update
                                        </button>
                                        <button className="recycleButton" onClick={() => props.deletePatch(patchId)}>Recycle</button>
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