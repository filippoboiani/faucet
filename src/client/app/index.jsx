import React from 'react';
import {render} from 'react-dom';
import FaucetForm from './components/faucet-form.component.jsx';
import InfoBox from './components/infobox-component.jsx';

// The maximum amount that can be take in satoshi
const MAX_AMOUNT = 10;

// Need to retrieve this information from somewhere
let mockAccount = {
  balance: 10000000000,
  currency: "satoshi",
  address: "1Gp3Pzqo5hjsYejjZME15bJxqeDM8Psfon", 
  reCaptchaKey: '6Ld-9jIUAAAAAP7fHQNFJD53UuvGJLN5tqSiQml4'
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      balance: 10000000000,
      currency: "satoshi",
      address: "1Gp3Pzqo5hjsYejjZME15bJxqeDM8Psfon", 
      reCaptchaKey: '6Ld-9jIUAAAAAP7fHQNFJD53UuvGJLN5tqSiQml4',
      beneficiary: '', 
      currentAmount: 0, 
      maxAmount: 10, 
      message: 'gfdgsgsdf', 
      transactionList: []
    }

    this.coinsRequested = this.coinsRequested.bind(this);
    this.setInfoBox = this.setInfoBox.bind(this);
  }

  coinsRequested(beneficiary, amount) {
      console.log(amount);
      let currentAmount = this.state.currentAmount;
      currentAmount += amount;  
      if (currentAmount > this.state.maxAmount) {
        
        this.setInfoBox(`The requested amount exceeds your max. You have ${this.state.maxAmount-this.state.currentAmount} left`);
  
      } else {
        // Genereate transaction 
        // Update currentAmount and balance 
        let balance = this.state.balance;
        balance -= amount;

        // console.log(balance, currentAmount);
        this.setState({
          currentAmount, 
          balance,
          beneficiary
        });
      }
  }

  render () {
    return (
        <div>
          <div className="row">
              <div className="center">
                    <h4>{this.state.balance}</h4>
                    <h5 className="grey-text text-lighten-1">Balance in {this.state.currency}</h5>
              </div>
          </div>
          <hr />
          <FaucetForm account={this.state} coinsCallback={ this.coinsRequested }/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));