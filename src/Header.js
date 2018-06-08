import React, { Component } from 'react';
import dappnodeLogo from './dappnode-logo.png'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <div className="row">
            <span className="navbar-brand">
              <img src={dappnodeLogo} className="navbar-logo" alt="DAppNode logo"/>
              <span className="header-brand">DAppNode </span>
              <span className="header-vertical-bar"></span>
              <span className="header-sub-brand dappnode-color">Connection Setup</span>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
