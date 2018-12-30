import React, { Component } from "react";
import getCredentials from "./credentials/getCredentials";

export default class Home extends Component {
  render() {
    const credentials = getCredentials();
    const selectedTagsToShow = [
      { name: "VPN type", tag: "VPNType" },
      { name: "Server Address", tag: "server" },
      { name: "PSK", tag: "psk" },
      { name: "User", tag: "user" },
      { name: "Password", tag: "pass" },
      { name: "Server Name", tag: "name" }
    ];
    const rows = selectedTagsToShow.map((credential, i) => {
      return (
        <tr key={i}>
          <th scope="row">{credential.name}</th>
          <td>
            <span className="in-text-copy">{credentials[credential.tag]}</span>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <section>
          <h4>Your VPN credentials</h4>
          <hr className="my-4" />
          <table className="table">
            <tbody>{rows}</tbody>
          </table>
        </section>
      </div>
    );
  }
}
