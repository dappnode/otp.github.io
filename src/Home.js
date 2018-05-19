import React, { Component } from 'react';
import getCredentials from './credentials/getCredentials'

export default class Home extends Component {
  render() {

    const credentials = getCredentials()
    const selectedTagsToShow = [
      {name: 'VPN type' , tag: 'VPNType'},
      {name: 'Server IP' , tag: 'server'},
      {name: 'PSK' , tag: 'psk'},
      {name: 'User' , tag: 'server'},
      {name: 'Password' , tag: 'pass'}
    ]
    const rows = selectedTagsToShow.map((credential, i) => {
      return (
        <tr key={i}>
          <th scope="row">{credential.name}</th>
          <td>
            <span className="in-text-copy">
              {credentials[credential.tag]}
            </span>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <section>
          <table className="table">
            <tbody>
              {rows}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
