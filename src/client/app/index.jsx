import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import FaucetForm from './components/faucet-form.component.jsx';

// The maximum amount that can be take in satoshi
const MAX_AMOUNT = 100;

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
      account: mockAccount
    }
  }

  render () {
    return (
        <div>
            <FaucetForm account={mockAccount}/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));