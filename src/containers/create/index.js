import React from "react";
import CoreList from "./cores.json";
import TextureList from "./textures.json";
import Doc from "./doc.png";

class Create extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            name: "none",
            owner: "none",
            core: "none",
            texture: "none",
            firstEssence: "none",
            secondEssence: "none",
            thirdEssence: "none"
        };

        this.onCoreChange = this.onCoreChange.bind(this);
        this.onTextureChange = this.onTextureChange.bind(this);
  }

    onCoreChange(e) {
        this.setState({ core: e.target.value });
    }
    
    onTextureChange(e) {
        this.setState({ texture: e.target.value });
    }
    
    render() {
    return(
        <div className="createWrapper">
            <div className="createContent">
                <h1>Make a New Friend!</h1>
                <br />
                <div className="createDocPicHolder">
                    <img className="createDocPic" src={Doc} />
                </div>
                <p><b>Core:</b> {this.state.core}</p>
                    <p><b>Texture:</b> {this.state.texture}</p>
                    <p><b>Essences:</b> {this.state.firstEssence} , {this.state.secondEssence} , {this.state.thirdEssence}</p>
                    <p><b>Name:</b> {this.state.name}</p>
                    <p><b>Creator:</b> {this.state.creator}</p>
                <h2>Select a Core!</h2>
                <div className="optionDiv">
                {CoreList.map((core, idx) => {
                    return (
                        <div className="optionContainer">
                            <div clasName="optionImageContainer">
                                <img className="optionImageImage" src={core.image} />
                            </div>
                            <button className="optionButton" onClick={this.onCoreChange} value={core.name} key={idx}>{core.name}</button>
                        </div>
                    )
                })}
                </div>
                <h2>Select a Texture!</h2>
                <div className="optionDiv">
                    {TextureList.map((texture, idx) => {
                        return (
                            <div className="optionContainer">
                                <div clasName="optionImageContainer">
                                    <img className="optionImageImage" src={texture.image} />
                                </div>
                                <button className="optionButton" onClick={this.onTextureChange} value={texture.name} key={idx}>{texture.name}</button>
                            </div>
                    )
                })}
                </div>
            </div>
      </div>
    );
  }
}

export default Create;