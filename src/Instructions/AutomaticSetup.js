import React, { Component } from "react";
import DownloadMobileConfig from "./DownloadMobileConfig";
import dappnodeExecuteInstruccion from "../img/dappnode-execute-instruccion-min.png";

const youtubeLink = {
  MacOS: "https://www.youtube.com/embed/NTCjKue3ynM",
  iOS: "https://www.youtube.com/embed/_Dt_HmdynDU"
};

export default class AutomaticSetup extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Automatic setup for {this.props.platform}</h1>
        <p className="lead">
          Download a .mobileconfig, to automatically configure a VPN connection
          to your DAppNode
        </p>
        <div data-toggle="modal" data-target="#exampleModal">
          <DownloadMobileConfig />
        </div>
        <hr className="my-4" />
        <p>
          If a file does not start to download shortly, please follow the manual
          setup guide below
        </p>

        <div className="videoWrapper">
          <iframe
            title="Automatic setup video instruccions"
            type="text\/html"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            src={youtubeLink[this.props.platform]}
          />
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Execute the downloaded .mobileconfig file
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  className="modal-image"
                  id="image"
                  alt="Please execute the downloaded file"
                  src={dappnodeExecuteInstruccion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
