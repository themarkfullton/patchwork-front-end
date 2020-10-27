import React from "react";
import API from "../../utils/API";
import TextureList from "../Workshop/textures.json";
import PatternList from "./patterns.json";
import TempermentList from "./temperments.json";
import { NavLink } from "react-router-dom";

const UpdateWorkshop = (props) => {

    var patchSrc = `/images/patches/${props.pattern}_${props.texture}.png`;

    return (
        <div>
            <h1>Return to the Workshop</h1>
            <p></p>
            <div className="workshopPatchContainer">
                <div className="wsPatchImageCont">
                    <img className="wsPatchImageImage" src={patchSrc} />
                </div>
                <div className="wsTitle">
                    <h3><span className={props.texture}>{props.name}</span> the {props.temperment} <span className={props.texture}>{props.texture}</span> {props.pattern}</h3>
                    <h4>{props.greeting}</h4>
                </div>
                <div className="wsName">
                    <div className="formGroup">
                        <label htmlFor="name">My Name</label>
                        <input type="text" className="form-control" value={props.name} onChange={props.onNameChange} required />
                    </div>
                    <div className="formGroup">
                        <select className="dropdown" onChange={props.onPatternChange} selected="Select Pattern">
                            {PatternList.map((pattern, idx) => {
                                return pattern.name == props.pattern ? (
                                    <option className="dropOpt" key={idx} value={pattern.name} selected="selected">{pattern.name}</option>
                                ) : (
                                    <option className="dropOpt" key={idx} value={pattern.name}>{pattern.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="formGroup">
                        <select className="dropdown" onChange={props.onTextureChange} selected="Select Texture">
                            {TextureList.map((texture, idx) => {
                                return texture.name == props.texture ? (
                                    <option className="dropOpt" key={idx} value={texture.name} selected="selected">{texture.name}</option>
                                ) :
                                    (
                                    <option className="dropOpt" key={idx} value={texture.name}>{texture.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="formGroup">
                        <select className="dropdown" onChange={props.onTempermentChange} selected="Select Temperment">
                            {TempermentList.map((temperment, idx) => {
                                return temperment.name == props.temperment ? (
                                    <option className="dropOpt" key={idx} value={temperment.name} selected="selected">{temperment.name}</option>
                                ) : (
                                    <option className="dropOpt" key={idx} value={temperment.name}>{temperment.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button onClick={props.updatePatch}>Update {props.name}</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateWorkshop;