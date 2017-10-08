import React, {Component} from 'react';
import {render} from 'react-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <a className="navbar-brand" href="#">
                <img src="/bitrefill_logo_120.png" height="45" className="d-inline align-top" alt="" />
                <span className="app-title">Faucet</span>
                </a>
            </nav>
        );
      }
}

export default Navbar