import React from "react";
import Bestiary from "../../components/Bestiary";
import API from "../../utils/API";

class View extends React.Component {
    state = {
        patches: [],
    }

    componentDidMount() {
        API.getPatches().then((res) => {
            this.setState({ patches: res.data });
        }).catch((err) => this.setState({ error: err.items }));
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="viewWrapper">
                <div className="viewContent">
                    <Bestiary patches={this.state.patches} />
                </div>
            </div>
        )
    }
}

export default View;