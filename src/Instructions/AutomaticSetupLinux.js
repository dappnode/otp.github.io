import React, { Component } from "react";
import DownloadLinuxConfig from "./DownloadLinuxConfig";
import linuxVideoInstruction from "../img/linux-video-instruction.webm";

export default class AutomaticSetupLinux extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Automatic setup for {this.props.platform}</h1>
        <p className="lead">
          Download the config file for GNU/Linux platforms and import it via the
           network manager to automatically configure a VPN connection to your 
           DAppNode. You might need to install additional software for the 
           import to work and should enter the VPN password at the end.
        </p>
        <div data-toggle="modal" data-target="#exampleModal">
          <DownloadLinuxConfig />
        </div>
        <hr className="my-4" />
        <p>
          If a file does not start to download shortly, please follow the manual
          setup guide below
        </p>

        <div className="videoWrapper">
          <iframe
            title="Automatic GNU/Linux setup video instructions"
            type="text\/html"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            src={linuxVideoInstruction}
          />
        </div>

      </div>
    );
  }
}
