import React from "react";
import CoreList from "./cores.json";
import TextureList from "./textures.json";
import FirstEssence from "./firstEssence.json";
import SecondEssence from "./secondEssence.json";
import ThirdEssence from "./thirdEssence.json";


const Workshop = (props) => {
    var patchSrc = `/images/patches/${props.pattern}_${props.texture}.png`;

    return props.submitPatch === true ? (
        <div className="createContent">
            <h1>It's alive!!</h1>
            <br />
            <p>Here's your new friend! If you like them, give them a name! If not, recycle the parts and remake them!</p>
            <p>{props.patchImage}</p>
            <div className="workshopPatchContainer">
                <div className="wsPatchImageCont">
                    <p className="imageSpeech">Give me a name!</p>
                    <img className="wsPatchImageImage" src={patchSrc} />
                </div>
                <div className="wsTitle">
                    <h3><span className={props.texture}>{props.name}</span> the <span className={props.texture}>{props.texture}</span> {props.pattern}</h3>
                </div>
                <div className="wsName">                    
                    <div className="formGroup">
                        <label htmlFor="name">My Name</label>
                        <input type="text" className="form-control" value={props.name} onChange={props.onNameChange} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="form-control" value={props.creator} onChange={props.onCreatorChange} required />
                    </div>
                </div>

                <div className="formGroup">
                <button className="submitBtn small" onClick={props.onRecyclePatch}>Recycle</button>
                    <button className="submitBtn small" onClick={props.onRecyclePatch}>Create</button>
                    </div>
            </div>
        </div>
    ): (
            <div className="createContent">
                <h1>Make a New Friend!</h1>
                <br />

                <h2>Select a Core!</h2>
                <div className="optionDiv">
                    {CoreList.map((core, idx) => {
                        var optionButtonClass = core.name == props.core ? "optionButton active" : "optionButton";
                            
                    return (
                        <div className="optionContainer" key={idx}>
                            <div className="optionImageContainer">
                                <img className="optionImageImage" style={{ width: 125, height: 125}} src={core.image} />
                            </div>
                            <button className={optionButtonClass} onClick={props.onCoreChange} value={core.name}>{core.name}</button>
                        </div>
                    )
                })}
                </div>
                <br />
                <hr />
                <br />
                <h2>Select a Texture!</h2>
                <div className="optionDiv">
                    {TextureList.map((texture, idx) => {
                        var optionButtonClass = texture.name == props.texture ? "optionButton active" : "optionButton";

                        return (
                            <div className="optionContainer" key={idx}>
                                <div className="optionImageContainer">
                                    <img className="optionImageImage" style={{ width: 100, height: 100 }} src={texture.image} />
                                </div>
                                <button className={optionButtonClass} onClick={props.onTextureChange} value={texture.name}>{texture.name}</button>
                            </div>
                    )
                })}
                </div>
                <br />
                <hr />
                <br />
                <h2>Select One Essence From Each List!</h2>
                <select className="dropdown" onChange={props.onFirstEssenceChange} >
                    {FirstEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val}>{essence.name}</option>
                        )
                    })}
                </select>
                <select className="dropdown" onChange={props.onSecondEssenceChange} >
                    {SecondEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val}>{essence.name}</option>
                        )
                    })}
                </select>
                <select className="dropdown" onChange={props.onThirdEssenceChange} >
                    {ThirdEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val}>{essence.name}</option>
                        )
                    })}
                </select>
                <br />
                <button className="submitBtn" onClick={props.onSubmitPatch}>View My Patch!</button>

                <p><b>Core:</b> {props.core}</p>
                <p><b>Texture:</b> {props.texture}</p>
                <p><b>ImgSrc:</b> {props.patchImage}</p>
                <p><b>First Essence:</b> {props.firstEssence}</p>
                <p><b>Second Essence:</b> {props.secondEssence}</p>
                <p><b>Third Essence:</b> {props.thirdEssence}</p>
            </div>
        );
}

export default Workshop;