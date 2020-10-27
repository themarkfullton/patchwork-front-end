import React from "react";
import API from "../../utils/API";

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
    }

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data })
        }).catch((err) => this.setState({ error: err.items }));
    }

    toggleUpdate(patchId) {
        this.setState({
            currentUpdateId: patchId
        });
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
            <div>
                <p>{this.state.patches}</p>
            </div>
        )
    }
}

export default View;