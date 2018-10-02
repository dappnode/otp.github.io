import React, { Component } from "react";
import Credential from "./Credential";

export default class Chromebook extends Component {
  render() {
    // <Credential tag={'server'}/>
    return (
      <div>
        <h4>Chromebook setup guide</h4>
        <hr className="my-4" />
        <ol className="ListInstructions">
          <li>If you have not already, sign in to your Chromebook.</li>
          <li>Click the status area, where your account picture appears.</li>
          <li>
            Click <strong>Settings</strong>.
          </li>
          <li>
            In the <strong>Internet connection</strong> section, click{" "}
            <strong>Add connection</strong>.
          </li>
          <li>
            Click <strong>Add OpenVPN / L2TP</strong>.
          </li>
          <li>
            Enter <Credential tag={"server"} /> for the{" "}
            <strong>Server hostname</strong>.
          </li>
          <li>
            Enter anything you like for the <strong>Service name</strong>.
          </li>
          <li>
            Make sure <strong>Provider type</strong> is{" "}
            <strong>L2TP/IPSec + pre-shared key</strong>.
          </li>
          <li>
            Enter <Credential tag={"psk"} /> for the{" "}
            <strong>Pre-shared key</strong>.
          </li>
          <li>
            Enter <Credential tag={"user"} /> for the <strong>Username</strong>.
          </li>
          <li>
            Enter <Credential tag={"pass"} /> for the <strong>Password</strong>.
          </li>
          <li>
            Click <strong>Connect</strong>.
          </li>
        </ol>
        <hr className="my-4" />
      </div>
    );
  }
}
