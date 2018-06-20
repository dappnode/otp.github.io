import React, { Component } from "react";
import getCredentials from "../credentials/getCredentials";

export default class Credential extends Component {
  render() {
    const credentials = getCredentials();
    const tag = this.props.tag;
    const value = credentials[tag];
    return <span className="in-text-copy">{value}</span>;
  }
}

// <div className="input-group">
//   <input type="text" value={value} readOnly="readonly" />
//   <div className="input-group-append">
//     <button type="button" className="btn btn-outline-secondary copyButton">{COPY_BUTTON_TEXT}</button>
//   </div>
// </div>
