import React, { Component } from 'react';

class InfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        }

        this.setInfoBox = this.setInfoBox.bind(this);
    }

    setInfoBox(message) {
        this.setState({message});
    }

    render () {
        return (
            <div className="row">
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default InfoBox