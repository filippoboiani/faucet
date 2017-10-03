import React, { Component } from 'react';
// import DragHere from '../drag-here.component.jsx';
import ReCAPTCHA from 'react-google-recaptcha';

class FaucetForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            addressValue: '',
            account: props.account
        }

        // bound functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // handle submit
    handleSubmit(event) {
        console.log('Account submitted', this.state.addressValue);
        event.preventDefault();
    }

    // handle change, without this the state doesn't change
    handleChange(event) {
        this.setState({addressValue: event.target.value});
      }

    render(){
        return (
            <div className="btn-group">
                <button className={"btn btn-sm pull-right " + (this.state.activateCreate? 'btn-primary': 'btn-default')} onClick={(e) => this.toggleFormElement(e, false, 'addSocialRecord')}>1</button>
                <button className={"btn btn-sm pull-right " + (this.state.activateUpdate? 'btn-warning': 'btn-default')} onClick={(e) => this.toggleFormElement(e, true, 'updateSocialRecord')}>10</button>
                <button className={"btn btn-sm pull-right " + (this.state.activateUpdate? 'btn-warning': 'btn-default')} onClick={(e) => this.toggleFormElement(e, true, 'updateSocialRecord')}>20</button>
            </div>
        );
    }
}

export default FaucetForm
