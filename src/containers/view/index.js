import React from "react";
import UpdateWorkshop from "../../components/UpdateWorkshop";
import API from "../../utils/API";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUpdateId: "",
            patches: []
        };

        this.toggleUpdate = this.toggleUpdate.bind(this);
    }

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data });
        }).catch((err) => this.setState({ error: err.items }));
        window.scrollTo(0, 0);
    }

    toggleUpdate(patchId) {
        this.setState({
            currentUpdateId: patchId
        });
    }

    render() {
        return (
            <div className="viewWrapper">
                <div className="viewContent">
                    <UpdateWorkshop currentUpdateId={this.state.currentUpdateId} toggleUpdate={this.toggleUpdate} />
                </div>
            </div>
        );
    }
}

export default View;