import React from "react";
import API from "../../utils/API";


class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "?",
            texture: "Argyle",
            temperment: "none",
            greeting: "",
            submitPatch: false,
            id: ""
        };

        this.setId = this.setId.bind(this);
    }

    setId() {
        let { id } = useParams();

        this.setState({
            id: id
        });
    }

    componentDidMount() {
        this.setId();
        window.scrollTo(0, 0);
    }
    
    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onTextureChange(e) {
        this.setState({ texture: e.target.value });
    }

    onTempermentChange(e) {
        this.setState({ texture: e.target.value });
    }

    onGreetingChange(e) {
        this.setState({ greeting: e.target.value });
    }


    render() {
         
        return (
            <div className="updateWrapper">
                <div className="updateContent">
                    <p>{this.state.id}</p>
                </div>
            </div>
        )
    }
}

export default Update;