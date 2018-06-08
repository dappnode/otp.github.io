import React, { Component } from 'react';
import { Route, NavLink as Link } from 'react-router-dom'
// General components
import Home from './Home';
import Credentials from './Credentials'
import WrongOTP from './WrongOTP';
import HiddenRedirector from './HiddenRedirector'
// Platform dedicated components
import MacOS from './Instructions/MacOS';
import Windows from './Instructions/Windows';
import Android from './Instructions/Android';
import iOS from './Instructions/iOS';
import Chromebook from './Instructions/Chromebook';
// Dedicated functions
import getCredentials from './credentials/getCredentials'
// Icons
import { FaWindows, FaApple, FaMobile, FaAndroid, FaChrome, FaWrench } from 'react-icons/lib/fa'

const options = [
  {
    name: 'MacOS',
    route: 'macos',
    component: MacOS,
    icon: FaApple
  },
  {
    name: 'iOS',
    route: 'ios',
    component: iOS,
    icon: FaMobile
  },
  {
    name: 'Windows',
    route: 'windows',
    component: Windows,
    icon: FaWindows
  },
  {
    name: 'Android',
    route: 'android',
    component: Android,
    icon: FaAndroid
  },
  {
    name: 'Chromebook',
    route: 'chromebook',
    component: Chromebook,
    icon: FaChrome
  },
  {
    name: 'Credentials',
    route: 'credentials',
    component: Credentials,
    icon: FaWrench
  }
]

export default class App extends Component {

  render() {
    const routes = options.map((option, i) => {
      return (
        <Route key={i} path={'/' + option.route} component={option.component}/>
      )
    })
    // <item.icon />
    const links = options.map((option, i) => {
      return (
        <li key={i} className="nav-item">
          <Link
            className="nav-link"
            to={{ pathname: option.route, hash: window.location.hash}}

            query={this.props.query}
            >
            <span className="nav-icon"><option.icon /></span>
            {option.name}
          </Link>
        </li>
      )
    })

    const credentials = getCredentials()

    if (credentials) {
      return (
        <div className="container">
          <div className="row mb-3 mt-3">
          </div>
          <div className="row mb-3">
            <ul className="nav nav-tabs">
              {links}
            </ul>
          </div>
          <div className="row">
            <Route exact path='/' component={Home}/>
            {routes}
          </div>
          <HiddenRedirector />
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <WrongOTP />
          </div>
        </div>
      )
    }
  }
}
