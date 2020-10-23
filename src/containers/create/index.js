import React from "react";
import CoreList from "./cores.json";
import TextureList from "./textures.json";
import FirstEssence from "./firstEssence.json";
import SecondEssence from "./secondEssence.json";
import ThirdEssence from "./thirdEssence.json";

class Create extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            name: "unassigned",
            owner: "unassigned",
            core: "unassigned",
            texture: "unassigned",
            firstEssence: 0,
            secondEssence: 3,
            thirdEssence: 6,
            pattern: "",
            temperment: "none"
        };

        this.onCoreChange = this.onCoreChange.bind(this);
        this.onTextureChange = this.onTextureChange.bind(this);
        this.onFirstEssenceChange = this.onFirstEssenceChange.bind(this);
        this.onSecondEssenceChange = this.onSecondEssenceChange.bind(this);
        this.onThirdEssenceChange = this.onThirdEssenceChange.bind(this);
        this.submitPatch = this.submitPatch.bind(this);
        this.largestTrait = this.largestTrait.bind(this);
        this.tallyTemperment = this.tallyTemperment.bind(this);
  }

    onCoreChange(e) {
        this.setState({ core: e.target.value });
    }
    
    onTextureChange(e) {
        this.setState({ texture: e.target.value });
    }

    onFirstEssenceChange(e) {
        this.setState({ firstEssence: e.target.value });
    }

    onSecondEssenceChange(e) {
        this.setState({ secondEssence: e.target.value });
    }

    onThirdEssenceChange(e) {
        this.setState({ thirdEssence: e.target.value });
    }

    submitPatch() {
        this.tallyTemperment();
    }

    tallyTemperment() {
        let tally = [0, 0, 0, 0, 0, 0, 0];
        // [0] Sassy [1] Passionate [2] Comical [3] Despondent
        // [4] Analytical [5] Idealistic [6] Gentle
        
        tally[this.state.firstEssence]++;
        tally[this.state.secondEssence]++;
        tally[this.state.thirdEssence]++;
        
        let trait = this.largestTrait(tally);

        switch (trait) {
            case 0:
                this.setState({ temperment: "sassy" });
                break;
            case 1:
                this.setState({ temperment: "passionate" });
                break;
            case 2:
                this.setState({ temperment: "comical" });
                break;
            case 3:
                this.setState({ temperment: "despondent" });
                break;
            case 4:
                this.setState({ temperment: "analytical" });
                break;
            case 5:
                this.setState({ temperment: "idealistic" });
                break;
            case 6:
                this.setState({ temperment: "gentle" });
                break;
        }
    }

    largestTrait(tally) {
        if (tally.length === 0) {
            return -1;
        }

        var max = tally[0];
        var maxIndex = 0;

        for (var i = 1; i < tally.length; i++) {
            if (tally[i] > max) {
                maxIndex = i;
                max = tally[i];
            }
        }

        return maxIndex;
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
      </div>
    );
  }
}

export default Create;