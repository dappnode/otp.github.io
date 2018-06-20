import React, { Component } from "react";
import Credential from "./Credential";

export default class Windows7 extends Component {
  render() {
    // <Credential tag={'server'}/>
    return (
      <div>
        <h4>Windows 7, Vista and XP setup guide</h4>
        <hr className="my-4" />
        <ol className="ListInstructions">
          <li>Click on the Start Menu and go to the Control Panel.</li>
          <li>
            Go to the <strong>Network and Internet</strong> section.
          </li>
          <li>
            Click <strong>Network and Sharing Center</strong>.
          </li>
          <li>
            Click <strong>Set up a new connection or network</strong>.
          </li>
          <li>
            Select <strong>Connect to a workplace</strong> and click{" "}
            <strong>Next</strong>.
          </li>
          <li>
            Click <strong>Use my Internet connection (VPN)</strong>.
          </li>
          <li>
            Enter <Credential tag={"server"} />_VPN_SERVER_ in the{" "}
            <strong>Internet address</strong> field.
          </li>
          <li>
            Enter anything you like in the <strong>Destination name</strong>{" "}
            field.
          </li>
          <li>
            Check the{" "}
            <strong>
              Do not connect now; just set it up so I can connect later
            </strong>{" "}
            checkbox.
          </li>
          <li>
            Click <strong>Next</strong>.
          </li>
          <li>
            Enter <Credential tag={"user"} /> in the <strong>User name</strong>{" "}
            field.
          </li>
          <li>
            Enter <Credential tag={"pass"} /> in the <strong>Password</strong>{" "}
            field.
          </li>
          <li>
            Check the <strong>Remember this password</strong> checkbox.
          </li>
          <li>
            Click <strong>Create</strong>, and then <strong>Close</strong>.
          </li>
          <li>
            Return to <strong>Network and Sharing Center</strong>. On the left,
            click <strong>Change adapter settings</strong>.
          </li>
          <li>
            Right-click on the new VPN entry and choose{" "}
            <strong>Properties</strong>.
          </li>
          <li>
            Click the <strong>Options</strong> tab and uncheck{" "}
            <strong>Include Windows logon domain</strong>.
          </li>
          <li>
            Click the <strong>Security</strong> tab. Select "Layer 2 Tunneling
            Protocol with IPsec (L2TP/IPSec)" for the{" "}
            <strong>Type of VPN</strong>.
          </li>
          <li>
            Click <strong>Allow these protocols</strong>. Be sure to select the
            "Challenge Handshake Authentication Protocol (CHAP)" checkbox.
          </li>
          <li>
            Click the <strong>Advanced settings</strong> button.
          </li>
          <li>
            Select <strong>Use preshared key for authentication</strong> and
            enter <Credential tag={"psk"} /> for the <strong>Key</strong>.
          </li>
          <li>
            Click <strong>OK</strong> to close the{" "}
            <strong>Advanced settings</strong>.
          </li>
          <li>
            Click <strong>OK</strong> to save the VPN connection details.
          </li>
          <li>
            Note: This{" "}
            <a href="https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients.md#windows-error-809">
              one-time registry change
            </a>{" "}
            is required if the VPN server and/or client is behind NAT (e.g. home
            router).
          </li>
          <li>
            To connect to the VPN, click on the wireless/network icon in your
            system tray, select the new VPN entry, and click Connect.
          </li>
          <li>
            If prompted, enter Your VPN Username <Credential tag={"user"} /> and
            Password <Credential tag={"pass"} />, then click OK. You can verify
            that your traffic is being routed properly by looking up your IP
            address on Google. It should say "Your public IP address is "{" "}
            <Credential tag={"server"} />
          </li>
          <li>
            If you get an error when trying to connect, see{" "}
            <a href="https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients.md#troubleshooting">
              Troubleshooting
            </a>.
          </li>
        </ol>
        <hr className="my-4" />
      </div>
    );
  }
}
