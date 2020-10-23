import React from "react";
import CoreList from "./cores.json";
import TextureList from "./textures.json";
import FirstEssence from "./firstEssence.json";
import SecondEssence from "./secondEssence.json";
import ThirdEssence from "./thirdEssence.json";

const Workshop = (props) => {
    return props.submitPatch === true ? (
        <div className="createContent">
            <h1>It's alive!!</h1>
            <br />
            <p>Here's your new friend! If you like them, give them a name! If not, head back to the drawing board!</p>
            <div className="workshopPatchContainer">
                <div className="wsPatchImageCont">
                    <img src="" />
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
                        var optionButtonClass = core.name == this.state.core ? "optionButton active" : "optionButton";
                            
                    return (
                        <div className="optionContainer" key={idx}>
                            <div className="optionImageContainer">
                                <img className="optionImageImage" style={{ width: 125, height: 125}} src={core.image} />
                            </div>
                            <button className={optionButtonClass} onClick={this.onCoreChange} value={core.name}>{core.name}</button>
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
                        var optionButtonClass = texture.name == this.state.texture ? "optionButton active" : "optionButton";

                        return (
                            <div className="optionContainer" key={idx}>
                                <div className="optionImageContainer">
                                    <img className="optionImageImage" style={{ width: 100, height: 100 }} src={texture.image} />
                                </div>
                                <button className={optionButtonClass} onClick={this.onTextureChange} value={texture.name}>{texture.name}</button>
                            </div>
                    )
                })}
                </div>
                <br />
                <hr />
                <br />
                <h2>Select One Essence From Each List!</h2>
                <select className="dropdown" onChange={this.onFirstEssenceChange} >
                    {FirstEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val}>{essence.name}</option>
                        )
                    })}
                </select>
                <select className="dropdown" onChange={this.onSecondEssenceChange} >
                    {SecondEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val}>{essence.name}</option>
                        )
                    })}
                </select>
                <select className="dropdown" onChange={this.onThirdEssenceChange} >
                    {ThirdEssence.map((essence, idx) => {
                        return (
                            <option className="dropOpt" key={idx} value={essence.val} dataname={essence.name}>{essence.name}</option>
                        )
                    })}
                </select>
                <br />
                <button className="submitBtn" onClick={this.submitPatch}>View My Patch!</button>

                <p><b>First Essence:</b> {this.state.firstEssence}</p>
                <p><b>Second Essence:</b> {this.state.secondEssence}</p>
                <p><b>Third Essence:</b> {this.state.thirdEssence}</p>
                <p><b>Temperment:</b> {this.state.temperment}</p>
            </div>
        );
}

export default Workshop;