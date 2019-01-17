import React, { Component } from "react";
import getCredentials from "../credentials/getCredentials";
import generateLinuxConfigFile from "../credentials/generateLinuxConfigFile";

export default class DownloadLinuxConfig extends Component {
  render() {
    const credentials = getCredentials();
    const file_text = generateLinuxConfigFile(credentials);
    const href =
      "data:application/linux-networkmanager-config; Charset=utf-8," +
      encodeURIComponent(file_text);
    return (
      <div className="lead">
        <a
          className="btn btn-primary btn-lg dappnode-background-color"
          role="button"
          download="dappnode.conf"
          href={href}
        >
          Download
        </a>
      </div>
    );
  }
}
