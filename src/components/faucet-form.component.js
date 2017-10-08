import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import GitHub from './network.component.js';
import axios from 'axios';

class FaucetForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userAddress: '',
            valid: null,
            submit: false,
            counter: 0,
            account: props.account
        }
        console.log(this.state);
        // bound functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCaptcha = this.handleCaptcha.bind(this);
        this.checkAddress = this.checkAddress.bind(this);
        this.restart = this.restart.bind(this);
    }

    // handle change, without this the state doesn't change
    handleChange(event) {
        // const formValues = this.state.formValues;
        // formValues[valueName] = event.target.value;
        let userAddress = event.target.value;
        this.setState({userAddress})
    }

    checkAddress(address) {
        return (address.length > 25 && address.length < 35 && (address.charAt(0) == '1' || address.charAt(0) == '3'));  
    }

    // handle changes in chapta
    handleCaptcha(value){
        console.log("Captcha value:", value);
        this.setState({valid: value})
    }

    // handle submit
    handleSubmit(event) {
        console.log('Account submitted', this.state);
        event.preventDefault();
        let address = this.state.userAddress;

        // if the address and the chapta are valid 
        if (this.state.valid && this.checkAddress(address)) {
            console.log('valid');
            let counter = this.state.counter++;
            this.setState({counter, submit: true})
            // call to APIs
            // axios
            //     .get(`http://api.github.com/users/${address}`)
            //     .then(response => console.log(response));
            this.props.coinsCallback(null, address);

        } else {
            console.log('invalid');
            this.props.coinsCallback('The amount is not allowed', null);

        }
    }

    restart() {
        
        this.setState({
            submit: false, 
            valid: null, 
            userAddress: ''
        });
    }

    render(){
        if(this.state.valid && this.state.submit) 
        return (
             <div>
                 <h3>You successfully claimed some coins!</h3>
                 <button onClick={this.restart} className="btn btn-success custom-btn"> Do it Again </button>
             </div>
         )
        return (
            <form className="centered-form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input type="text" className="search-query form-control" placeholder="0x3n3b5b..." value={this.state.userAddress} onChange={this.handleChange}/>
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-success custom-btn">
                            Get Coins <span className="glyphicon glyphicon-btc" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <ReCAPTCHA className="center-margin vertical-offset-50" ref="recaptcha" sitekey={this.state.account.reCaptchaKey} onChange={this.handleCaptcha}/>
                <p className="small font-weight-normal vertical-offset-50">Enter your bitcoin address to claim some coins.</p>
            </form> 
        );
    }
}

export default FaucetForm
