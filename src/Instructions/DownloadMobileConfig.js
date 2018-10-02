import React, { Component } from "react";
import getCredentials from "../credentials/getCredentials";
import generateMobileConfigFile from "../credentials/generateMobileConfigFile";

export default class DownloadMobileConfig extends Component {
  render() {
    const credentials = getCredentials();
    const file_text = generateMobileConfigFile(credentials);
    // const fileName = credentials.name || 'DAppNode'
    const href =
      "data:application/x-apple-aspen-config; Charset=utf-8," +
      encodeURIComponent(file_text);
    return (
      <div className="lead">
        <a
          className="btn btn-primary btn-lg dappnode-background-color"
          role="button"
          href={href}
        >
          Download
        </a>
      </div>
    );
  }
}

// <div className="input-group">
//   <input type="text" value={value} readOnly="readonly" />
//   <div className="input-group-append">
//     <button type="button" className="btn btn-outline-secondary copyButton">{COPY_BUTTON_TEXT}</button>
//   </div>
// </div>
