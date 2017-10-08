import React, { Component } from 'react';
import FaucetForm from './components/faucet-form.component.js';
import Navbar from './components/navbar.component.js';
import './App.css';

// Need to retrieve this information from somewhere
let mockAccount = {
  balance: 10000000000,
  currency: "satoshi",
  address: "1Gp3Pzqo5hjsYejjZME15bJxqeDM8Psfon", 
  reCaptchaKey: '6Ld-9jIUAAAAAP7fHQNFJD53UuvGJLN5tqSiQml4'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 10000000000,
      currency: "satoshi",
      address: "1Gp3Pzqo5hjsYejjZME15bJxqeDM8Psfon", 
      reCaptchaKey: '6Ld-9jIUAAAAAP7fHQNFJD53UuvGJLN5tqSiQml4',
      beneficiary: '', 
      transactionList: []
    }

    this.coinsRequested = this.coinsRequested.bind(this);
  }

  coinsRequested(beneficiary, amount) {
      console.log(amount);
      let currentAmount = this.state.currentAmount;
      currentAmount += amount;  
      if (currentAmount > this.state.maxAmount) {
        
        console.log(`The requested amount exceeds your max. You have ${this.state.maxAmount-this.state.currentAmount} left`);
  
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

render() {
    return (
      <div className="app">
        <Navbar />
        <div className="app-box">
          <h1 className="app-desc vertical-offset-100">Bitrefill allows you to earn satoshi for free</h1>
          <FaucetForm account={this.state} coinsCallback={ this.coinsRequested }/>
        </div>
      </div>
    );
  }
}

export default App;
