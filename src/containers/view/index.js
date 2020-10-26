import React from "react";
import Bestiary from "../../components/Bestiary";
import API from "../../utils/API";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        currentUpdateId: "",
        updateMode: false,
        patches: [],
        }
        this.toggleUpdate = this.toggleUpdate.bind(this);
    }
    

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data });
        }).catch((err) => this.setState({ error: err.items }));
        window.scrollTo(0, 0);
    }
    
    toggleUpdate(patchId) {
        if (!this.state.updateMode) {
            this.setState({
                currentUpdateId: patchId,
                updateMode: true
            });    
        } else {
            this.setState({
                currentUpdateId: "",
                updateMode: false
            })
        }
    }

    render() {
        return this.state.updateMode === true ? (<div className="viewWrapper">
                <div className="viewContent">
                <p>Update Mode</p>
                <p>{this.state.currentUpdateId}</p>
                <button toggleUpdate={() => this.toggleUpdate()}>Toggle Update!</button>
                </div>
            </div>
        ) : (
            <div className="viewWrapper">
                <div className="viewContent">
                    <Bestiary patches={this.state.patches} toggleUpdate={this.toggleUpdate} />
                </div>
            </div>
        )
    }
}

export default View;