import React from "react";
import CoreList from "./cores.json";
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

        this.onCoreChange = this.onCoreChange.bind(this)
  }

    onCoreChange(e) {
        this.setState({ core: e.target.value });
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
                <div className="coreDiv">
                {CoreList.map((core, idx) => {
                    return (
                        <button onClick={this.onCoreChange} value={core.name} key={idx}>{core.name}</button>
                    )
                })}
                </div>
            </div>
      </div>
    );
  }
}

export default Create;