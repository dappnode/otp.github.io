import React, { Component } from "react";
import Credential from "./Credential";
import AutomaticSetup from "./AutomaticSetup";

export default class iOS extends Component {
  render() {
    // <Credential tag={'server'}/>
    return (
      <div>
        <AutomaticSetup platform={"iOS"} />

        <h4>iOS setup guide</h4>
        <hr className="my-4" />
        <ol className="ListInstructions">
          <li>Go to Settings -> General -> VPN.</li>
          <li>
            Tap <strong>Add VPN Configuration...</strong>.
          </li>
          <li>
            Tap <strong>Type</strong>. Select <strong>L2TP</strong> and go back.
          </li>
          <li>
            Tap <strong>Description</strong> and enter anything you like.
          </li>
          <li>
            Tap <strong>Server</strong> and enter <Credential tag={"server"} />
          </li>
          <li>
            Tap <strong>Account</strong> and enter <Credential tag={"user"} />
          </li>
          <li>
            Tap <strong>Password</strong> and enter <Credential tag={"pass"} />
          </li>
          <li>
            Tap <strong>Secret</strong> and enter <Credential tag={"psk"} />
          </li>
          <li>
            Make sure the <strong>Send All Traffic</strong> switch is OFF.
          </li>
          <li>
            Tap <strong>Done</strong>.
          </li>
          <li>
            Slide the <strong>VPN</strong> switch ON.
          </li>
        </ol>
        <hr className="my-4" />
      </div>
    );
  }
}
