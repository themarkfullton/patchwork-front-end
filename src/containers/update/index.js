import React from "react";

class Update extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className="updateWrapper">
                <div className="updateContent">
                    <p>Update</p>
                </div>
            </div>
        )
    }
}

export default Update;