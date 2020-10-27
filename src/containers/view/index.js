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
            patchSrc: "",
            name: "",
            pattern: "",
            texture: "",
            temperment: "",
            greeting: "",
            updatingPatch: false,
        };

        this.toggleUpdate = this.toggleUpdate.bind(this);
        this.deletePatch = this.deletePatch.bind(this);
        this.togglePage = this.togglePage.bind(this);
    }

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    // patchId, patchSrc, patch.name,  patch.pattern, patch.texture, patch.greeting, patch.temperment
    toggleUpdate(patchId, patchSrc, name, pattern, texture, greeting, temperment) {
        switch (this.state.updatingPatch) {
            case true:
                this.setState({
                    currentUpdateId: "",
                    patchSrc: "",
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
                    patchSrc: patchSrc,
                    name: name,
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
                return <UpdateWorkshop patchId={this.state.currentUpdateId} patchSrc={this.state.patchSrc} name={this.state.name} pattern={this.state.pattern} texture={this.state.texture} greeting={this.state.greeting} temperment={this.state.temperment} toggleUpdate={this.toggleUpdate} />
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



    render() {
        return (
            <div className="viewWrapper">
                {this.togglePage()}
            </div>
        )
    }
}

export default View;