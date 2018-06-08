import React, { Component } from 'react';
import DownloadMobileConfig from './DownloadMobileConfig'

const youtubeLink = {
  MacOS: 'https://www.youtube.com/embed/NTCjKue3ynM',
  iOS: 'https://www.youtube.com/embed/_Dt_HmdynDU'
}


export default class AutomaticSetup extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Automatic setup for {this.props.platform}</h1>
        <p className="lead">Download a .mobileconfig, which automatically configures a VPN connection to your DAppNode</p>
        <DownloadMobileConfig />
        <hr className="my-4"/>
        <p>If a file does not start to download shortly, please use the manual guide below</p>

        <div className="videoWrapper">
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            src={youtubeLink[this.props.platform]}
            >
          </iframe>
        </div>

      </div>
    );
  }
}
