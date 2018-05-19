import React, { Component } from 'react';
import Credential from './Credential'
import AutomaticSetup from './AutomaticSetup'

export default class MacOS extends Component {
  render() {

    return (
      <div>
        <AutomaticSetup
          platform={'MacOS'}
        />

        <h4>MacOS setup guide</h4>
        <hr className="my-4"/>
        <ol className='ListInstructions'>
          <li>Open System Preferences and go to the Network section.
          </li><li>Click the <strong>+</strong> button in the lower-left corner of the window.
          </li><li>Select <strong>VPN</strong> from the <strong>Interface</strong> drop-down menu.
          </li><li>Select <strong>L2TP over IPSec</strong> from the <strong>VPN Type</strong> drop-down menu.
          </li><li>Enter anything you like for the <strong>Service Name</strong>.
          </li><li>Click <strong>Create</strong>.
          </li><li>Enter <Credential tag={'server'}/> for the <strong>Server Address</strong>.
          </li><li>Enter <Credential tag={'user'}/> for the <strong>Account Name</strong>.
          </li><li>Click the <strong>Authentication Settings</strong> button.
          </li><li>In the <strong>User Authentication</strong> section, select the <strong>Password</strong> radio button and enter <Credential tag={'pass'}/>.
          </li><li>In the <strong>Machine Authentication</strong> section, select the <strong>Shared Secret</strong> radio button and enter <Credential tag={'psk'}/>.
          </li><li>Click <strong>OK</strong>.
          </li><li>Check the <strong>Show VPN status in menu bar</strong> checkbox.
          </li><li>Click the <strong>Advanced</strong> button and make sure the <strong>Send all traffic over VPN connection</strong> checkbox is checked.
          </li><li>Click the <strong>TCP/IP</strong> tab, and make sure <strong>Link-local only</strong> is selected in the <strong>Configure IPv6</strong> section.
          </li><li>Click <strong>OK</strong> to close the Advanced settings, and then click <strong>Apply</strong> to save the VPN connection information.
          </li>
        </ol>
        <hr className="my-4"/>

      </div>
    );
  }
}
