import React, { Component } from "react";
import Credential from "./Credential";
import getCredentials from "../credentials/getCredentials";

const credentials = getCredentials();

export default class MacOS extends Component {
  render() {
    const configurationFile = `#org.freedesktop.NetworkManager.l2tp

[connection]
id=${credentials.name}

[vpn]
gateway=${credentials.server}
user=${credentials.user}
ipsec-enabled=true
ipsec-psk=${credentials.psk}
ipsec-ike=aes128-sha1-modp1024,3des-sha1-modp1024!
ipsec-esp=aes128-sha1-modp1024,3des-sha1-modp1024!

[ip4]
method=auto
routes=172.33.0.0/16;
ignore-auto-routes=false
ignore-auto-dns=false
dhcp-send-hostname=true
never-default=true`;

    return (
      <div>
        <h4>Linux setup guide</h4>
        <hr className="my-4" />
        <ol className="ListInstructions">
          <li>Open the terminal.</li>
          <li>
            Install two packages. Copy and run the following command,
            authenticating with your password when prompted. If you are asked
            "Do you want to continue? [Y/n]" type y
            <div className="code">
              sudo apt-get install network-manager-l2tp
              network-manager-l2tp-gnome
            </div>
          </li>
          <li>
            Copy and run the following code to create a configuration file in
            your home directory
            <div className="code">
              echo "{configurationFile}" > ~/dappnode.conf
            </div>
          </li>
          <li>
            Go to Wired Settings and click the <strong>+</strong> button at the
            top of the VPN section
          </li>
          <li>
            Click the <strong>Import from file...</strong> option on the Add VPN
            prompt that just openned
          </li>
          <li>
            Select the file you just created to automatically load the
            configuration. The file path is:
            <div className="code">~/dappnode.conf</div>
          </li>
          <li>
            Enter your password <Credential tag={"pass"} /> on the{" "}
            <strong>Password</strong> field, and click <strong>Add</strong> to
            confirm
          </li>
          <li>
            Now the VPN is configurated and you can connect by switching the
            slider next to the VPN <Credential tag={"name"} />
          </li>
        </ol>
        <hr className="my-4" />
      </div>
    );
  }
}
