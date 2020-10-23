import React from "react";
import Workshop from "../../components/Workshop";
import Greeting0 from "./greeting0.json";
import Greeting1 from "./greeting1.json";
import Greeting2 from "./greeting2.json";
import Greeting3 from "./greeting3.json";

class Create extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            name: "???",
            owner: "Anonymous",
            core: "Chaos",
            texture: "Argyle",
            firstEssence: 0,
            secondEssence: 3,
            thirdEssence: 6,
            pattern: "none",
            temperment: "none",
            greeting: "none",
            submitPatch: false
        };

        this.onCoreChange = this.onCoreChange.bind(this);
        this.onTextureChange = this.onTextureChange.bind(this);
        this.onFirstEssenceChange = this.onFirstEssenceChange.bind(this);
        this.onSecondEssenceChange = this.onSecondEssenceChange.bind(this);
        this.onThirdEssenceChange = this.onThirdEssenceChange.bind(this);
        this.onSubmitPatch = this.onSubmitPatch.bind(this);
        this.onRecyclePatch = this.onRecyclePatch.bind(this);
        this.largestTrait = this.largestTrait.bind(this);
        this.tallyTemperment = this.tallyTemperment.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCreatorChange = this.onCreatorChange.bind(this);
        this.createPatchGreeting = this.createPatchGreeting.bind(this);
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

    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onCreatorChange(e) {
        this.setState({ creator: e.target.value });
    }

    onSubmitPatch() {
        this.tallyTemperment();
        this.createPatchImage();
        this.createPatchGreeting();
        this.setState({
            submitPatch: true
        })
    }

    onRecyclePatch() {
        this.setState({
            submitPatch: false
        })
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
                this.setState({ temperment: "Sassy" });
                break;
            case 1:
                this.setState({ temperment: "Passionate" });
                break;
            case 2:
                this.setState({ temperment: "Comical" });
                break;
            case 3:
                this.setState({ temperment: "Despondent" });
                break;
            case 4:
                this.setState({ temperment: "Analytical" });
                break;
            case 5:
                this.setState({ temperment: "Idealistic" });
                break;
            case 6:
                this.setState({ temperment: "Gentle" });
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
        switch (this.state.core) {
            case "Chaos":
                if (this.state.firstEssence % 2 == 0) {
                    this.setState({
                        pattern: "Smiley"
                    })
                }
                else {
                    this.setState({
                        pattern: "Mrbiggs"
                    })
                }
                break;
            case "Time":
                if (this.state.firstEssence % 2  == 0) {
                    this.setState({
                        pattern: "Nobody"
                    })
                }
                else {
                    this.setState({
                        pattern: "Tranquil"
                    })
                }
                break;
            case "Wind":
                if (this.state.firstEssence % 2  == 0) {
                    this.setState({
                        pattern: "Grumpypuff"
                    })
                }
                else {
                    this.setState({
                        pattern: "Slumpy"
                    })
                }
                break;
        }
    }

    createPatchGreeting() {
        var ranNum = Math.floor(Math.random() * 4);
    var greetingList;
    var patchGreeting;
    switch (ranNum) {
        case 0:
            greetingList = Greeting0;
            break;
        case 1:
            greetingList = Greeting1;
            break;
        case 2:
            greetingList = Greeting2;
            break;
        case 3:
            greetingList = Greeting3;
            break
    }
    switch (props.temperment) {
        case "Sassy":
            patchGreeting = greetingList[0];
            break;
        case "Passionate":
            patchGreeting = greetingList[1];
            break;
        case "Comical":
            patchGreeting = greetingList[2];
            break;
        case "Despondent":
            patchGreeting = greetingList[3];
            break;
        case "Analytical":
            patchGreeting = greetingList[4];
            break;
        case "Idealistic":
            patchGreeting = greetingList[5];
            break;
        case "Gentle":
            patchGreeting = greetingList[6];
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
                greeting={this.state.greeting}
                submitPatch={this.state.submitPatch}
                onCoreChange={this.onCoreChange}
                onTextureChange={this.onTextureChange}
                onFirstEssenceChange={this.onFirstEssenceChange}
                onSecondEssenceChange={this.onSecondEssenceChange}
                onThirdEssenceChange={this.onThirdEssenceChange}
                onSubmitPatch={this.onSubmitPatch}
                onRecyclePatch={this.onRecyclePatch}
                onNameChange={this.onNameChange}
                onCreatorChange={this.onCreatorChange}
            />
      </div>
    );
  }
}

export default Create;