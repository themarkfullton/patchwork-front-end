import React from "react";

class View extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className="viewWrapper">
                <div className="viewContent">
                    <p>View</p>
                </div>
            </div>
        )
    }
}

export default View;