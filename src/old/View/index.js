import React from "react";
import UpdateWorkshop from "../../components/UpdateWorkshop";
import API from "../../utils/API";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUpdateId: "",
            name: "",
            creator: "",
            pattern: "",
            texture: "",
            temperment: "",
            greeting: "",            
            updatingPatch: false,
            patches: []
        };

        this.toggleUpdate = this.toggleUpdate.bind(this);
        this.deletePatch = this.deletePatch.bind(this);
    }

    componentDidMount() {
        this._isMounted = true; 

        API.getPatches().then((res) => {
            if (this._isMounted) {
                this.setState({ patches: res.data });    
            }
        }).catch((err) => this.setState({ error: err.items }));
        window.scrollTo(0, 0);
    }

    toggleUpdate(patchId) {
        this.setState({
            currentUpdateId: patchId
        });
    }
    
    deletePatch = (patchId) => {
        API.deletePatch(patchId).then((resp) => {
            alert("Successfully recycled patch!");
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }

    render() {
        return (
            <div className="viewWrapper">
                <div className="viewContent">
                    <UpdateWorkshop toggleUpdate={this.toggleUpdate} currentUpdateId={this.state.currentUpdateId} name={this.state.name} creator={this.state.creator} pattern={this.state.pattern} texture={this.state.texture} temperment={this.state.temperment} greeting={this.state.greeting} updatingPatch={this.state.updatingPatch} patches={this.state.patches} deletePatch={this.deletePatch} />
                </div>
            </div>
        );
    }
}

export default View;

// View -> Update