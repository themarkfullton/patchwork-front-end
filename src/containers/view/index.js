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

    toggleUpdate(patchId) {
        switch (this.state.updatingPatch) {
            case true:
                this.setState({
                    currentUpdateId: "",
                    updatingPatch: false
                });
                break;
            case false:
                this.setState({
                    currentUpdateId: patchId,
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
                return <UpdateWorkshop patchId={this.state.currentUpdateId} />
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