import React, { Component } from "react";
import Credential from "./Credential";

export default class Android extends Component {
  render() {
    // <Credential tag={'server'}/>
    return (
      <div>
        <h4>Android setup guide</h4>
        <hr className="my-4" />
        <ol className="ListInstructions">
          <li>
            Launch the <strong>Settings</strong> application.
          </li>
          <li>
            Tap <strong>More...</strong> in the{" "}
            <strong>Wireless & Networks</strong> section.
          </li>
          <li>
            Tap <strong>VPN</strong>.
          </li>
          <li>
            Tap <strong>Add VPN Profile</strong> or the <strong>+</strong> icon
            at top-right of screen.
          </li>
          <li>
            Enter anything you like in the <strong>Name</strong> field.
          </li>
          <li>
            Select <strong>L2TP/IPSec PSK</strong> in the <strong>Type</strong>{" "}
            drop-down menu.
          </li>
          <li>
            Enter <Credential tag={"server"} /> in the{" "}
            <strong>Server address</strong> field.
          </li>
          <li>
            Enter <Credential tag={"psk"} /> in the{" "}
            <strong>IPSec pre-shared key</strong> field.
          </li>
          <li>
            Click <strong>Show advanced options</strong> and enter{" "}
            <span className="in-text-copy">172.33.0.0/16</span> in the{" "}
            <strong>Forwarding routes</strong> field.
          </li>
          <li>
            Tap <strong>Save</strong>.
          </li>
          <li>Tap the new VPN connection.</li>
          <li>
            Enter <Credential tag={"user"} /> in the <strong>Username</strong>{" "}
            field.
          </li>
          <li>
            Enter <Credential tag={"pass"} /> in the <strong>Password</strong>{" "}
            field.
          </li>
          <li>
            Check the <strong>Save account information</strong> checkbox.
          </li>
          <li>
            Tap <strong>Connect</strong>.
          </li>
        </ol>
        <hr className="my-4" />
      </div>
    );
  }
}
