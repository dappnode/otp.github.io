import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import parser from 'ua-parser-js';

export default () => (
  <Route path="/" render={(props) => <Redirector {...props} />} />
)


class Redirector extends Component {
  componentWillMount() {
    const platform = guessUserPlatform()
    if (platform) {
      this.props.history.push(platform+this.props.location.hash)
    } else {
      this.props.history.push('credentials'+this.props.location.hash)
    }
  }
  render() {return null}
}


function guessUserPlatform() {

  const ua = parser(navigator.userAgent)

  if (ua.os.name.includes('Mac OS')) {
    return 'macos';
  } else if (ua.os.name.includes('Android')) {
    return 'android';
  } else if (ua.os.name.includes('iPhone')) {
    return 'ios';
  }

}
