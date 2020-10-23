import React from "react";
import Workshop from "../../components/Workshop";

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
            temperment: "none",
            submitPatch: false
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
        this.createPatchImage();
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

    createPatchImage() {
        let ranNum = Math.floor(Math.random() * 1);

        switch (this.state.core) {
            case "Chaos":
                break;
            case "Time":
                break;
            case "Wind":
                break;
        }
    }
    
    render() {
    return(
        <div className="createWrapper">
            <Workshop
                name={this.state.name}
                owner={this.state.owner}
                core={this.state.core}
                texture={this.state.texture}
                firstEssence={this.state.firstEssence}
                secondEssence={this.state.secondEssence}
                thirdEssence={this.state.thirdEssence}
                pattern={this.state.pattern}
                temperment={this.state.temperment}
                submitPatch={this.state.submitPatch}
                onCoreChange={this.onCoreChange}
                onTextureChange={this.onTextureChange}
                onFirstEssenceChange={this.onFirstEssenceChange}
                onSecondEssenceChange={this.onSecondEssenceChange}
                onThirdEssenceChange={this.onThirdEssenceChange}
                submitPatch={this.submitPatch}
            />
      </div>
    );
  }
}

export default Create;