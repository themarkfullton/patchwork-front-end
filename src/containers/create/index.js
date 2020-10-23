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

                <h2>Select a Core!</h2>
                <div className="optionDiv">
                {CoreList.map((core, idx) => {
                    return (
                        <div className="optionContainer">
                            <div clasName="optionImageContainer">
                                <img className="optionImageImage" style={{ width: 200, height: 200 }} src={core.image} />
                            </div>
                            <button className="optionButton" onClick={this.onCoreChange} value={core.name} key={idx}>{core.name}</button>
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
                        return (
                            <div className="optionContainer">
                                <div clasName="optionImageContainer">
                                    <img className="optionImageImage" style={{ width: 100, height: 100 }} src={texture.image} />
                                </div>
                                <button className="optionButton" onClick={this.onTextureChange} value={texture.name} key={idx}>{texture.name}</button>
                            </div>
                    )
                })}
                </div>
                <br />
                <hr />
                <br />
                <h2>Select One Essence From Each List!</h2>
            </div>
      </div>
    );
  }
}

export default Create;