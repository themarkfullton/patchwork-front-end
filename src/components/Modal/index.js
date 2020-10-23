import React from "react";

class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            owner: "",
            core: props.state.core,
            texture: props.state.texture,
            temperment: props.state.temperment,
        }
    }
}