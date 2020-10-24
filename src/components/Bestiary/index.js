import React from "react";

const Bestiary = (props) => {
    return props.patches.length === 0 ? (
        <div className="bestiaryWrap">
            <div className="bestiaryContainer">
                <h1>Bestiary</h1>
                <h2>All Patches Created so far!</h2>
                <div className="patchesContainer">
                    <p>Loading patches....</p>
                </div>
            </div>
        </div>
    ) : (
            <div className="bestiaryWrap">
                <div className="bestiaryContainer">
                    <h1>Bestiary</h1>
                    <h2>All Patches Created so far!</h2>
                    <div className="patchesContainer">
                        {props.patches.map((patch, idx) => {
                            var patchSrc = `/images/patches/${patch.pattern}_${patch.texture}.png`;

                            return (
                                <div className="patchContainer" key={idx}>
                                    <div className="patchImageContainer">
                                        <img className="patchImageImage" src={patchSrc} />
                                    </div>
                                    <div className="patchNameCont">
                                        <h3>{patch.name} the {patch.temperment}  {patch.texture} {patch.pattern}</h3>
                                        <h4>Creator: {patch.creator}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
}