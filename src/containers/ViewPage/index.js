import React from "react";
import API from "../../utils/API";
import Bestiary from "../../components/Bestiary";
import UpdateWorkshop from "../../components/UpdateWorkshop";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patches: [],
            currentUpdateId: "",
            name: "",
            creator: "",
            pattern: "",
            texture: "",
            temperment: "",
            greeting: "",
            updatingPatch: false,
        };

        this.toggleUpdate = this.toggleUpdate.bind(this);
        this.deletePatch = this.deletePatch.bind(this);
        this.togglePage = this.togglePage.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPatternChange = this.onPatternChange.bind(this);
        this.onTextureChange = this.onTextureChange.bind(this);
        this.onTempermentChange = this.onTempermentChange.bind(this);
        this.onGreetingChange = this.onGreetingChange.bind(this);
        this.updatePatch = this.updatePatch.bind(this);
    }

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    toggleUpdate(patchId, creator, name, pattern, texture, greeting, temperment) {
        switch (this.state.updatingPatch) {
            case true:
                this.setState({
                    currentUpdateId: "",
                    creator: "",
                    name: "",
                    pattern: "",
                    texture: "",
                    greeting: "",
                    temperment: "",
                    updatingPatch: false
                });
                break;
            case false:
                this.setState({
                    currentUpdateId: patchId,
                    name: name,
                    creator: creator,
                    pattern: pattern,
                    texture: texture,
                    greeting: greeting,
                    temperment: temperment,
                    updatingPatch: true
                });
                break;
        }
    }

    togglePage() {
        switch (this.state.updatingPatch) {
            case false:
                return <Bestiary patches={this.state.patches} toggleUpdate={this.toggleUpdate} deletePatch={this.deletePatch} />
            case true:
                return <UpdateWorkshop patchId={this.state.currentUpdateId} name={this.state.name} pattern={this.state.pattern} texture={this.state.texture} greeting={this.state.greeting} temperment={this.state.temperment} toggleUpdate={this.toggleUpdate} onNameChange={this.onNameChange} onPatternChange={this.onPatternChange} onTextureChange={this.onTextureChange} onTempermentChange={this.onTempermentChange} onGreetingChange={this.onGreetingChange} updatePatch={this.updatePatch} />
        }
    }

    deletePatch = (patchId) => {
        API.deletePatch(patchId).then((resp) => {
            alert("Successfully recycled patch");
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }

    updatePatch = () => {
        API.updatePatch(this.state.currentUpdateId, this.state.creator, this.state.name, this.state.pattern, this.state.texture, this.state.temperment, this.state.greeting).then((resp) => {
            alert("Successfully updated " + this.state.name + "!");
            this.toggleUpdate();
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }

    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onPatternChange(e) {
        this.setState({ pattern: e.target.value }); 
    }

    onTextureChange(e) {
        this.setState({ texture: e.target.value });
    }

    onTempermentChange(e) {
        this.setState({ temperment: e.target.value,
         });
    }

    onGreetingChange(e) {
        this.setState({ greeting: e.target.value });
    }





    render() {
        return (
            <div className="viewWrapper">
                {this.togglePage()}
            </div>
        )
    }
}

export default View;