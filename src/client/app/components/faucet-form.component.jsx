import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class FaucetForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                userAddress: '',
                amount: 0
            },
            account: props.account
        }
        console.log(this.state);
        // bound functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCaptcha = this.handleCaptcha.bind(this);
        this.giveCoins = this.giveCoins.bind(this);
    }

    giveCoins() {
        let fakeTransaction = "0xb435b34b5b345b2345b345b43b5b342b3434b5";
        let amount = parseInt(this.state.formValues.amount);
        console.log(amount);
    }

    // handle submit
    handleSubmit(event) {
        console.log('Account submitted', this.state);
        event.preventDefault();
        this.giveCoins();
    }

    // handle change, without this the state doesn't change
    handleChange(valueName, event) {
        const formValues = this.state.formValues;
        formValues[valueName] = event.target.value;
        this.setState({formValues});
    }

    handleCaptcha(value){
        console.log("Captcha value:", value);
    }

    render(){
        return (
            <form className="centered-form" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="center">
                        <h4>{this.state.account.balance}</h4>
                        <h5 className="grey-text text-lighten-1">Faucet Balance in {this.state.account.currency}</h5>
                    </div>
                </div>
                <hr />
                
                <div>
                    <label>
                        Amount of satoshi:
                        <input type="number" className="search-query form-control" value={this.state.formValues.amount} onChange={this.handleChange.bind(this, 'amount')} />
                    </label>
                </div>
                
                <div>
                    <label>
                        Your Address:
                        <input type="text" className="search-query form-control" placeholder="0x3n3b5b..." value={this.state.formValues.userAddress} onChange={this.handleChange.bind(this, 'userAddress')}/>
                    </label>
                </div>

                <ReCAPTCHA className="center-margin" ref="recaptcha" sitekey={this.state.account.reCaptchaKey} onChange={this.handleCaptcha}/>
                
                <div className="vertical-offset-50">
                    <button type="submit" className="waves-effect waves-light btn-large" >Get Coins
                    </button>
                </div>
            </form> 
        );
    }
}

export default FaucetForm
