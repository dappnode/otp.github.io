import FileSaver from 'file-saver';


export default function(credentials) {

  // var credentialTags = generateTagsFromCredentials(credentials, true);
	var mobileConfigFile = templateMobileConfig(credentials);

  // var blob = new Blob([mobileConfigFile], {type: "text/plain;charset=utf-8"});
  // window.downloadMobileConfig = function() {
  //   FileSaver.saveAs(blob, "connect_to_your_DAppNode.mobileconfig");
  //   console.log('Downloaded config file')
  // }
  return mobileConfigFile

}


function templateMobileConfig(credentials) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
  <dict>
  	<key>PayloadContent</key>
  	<array>
  		<dict>
  			<key>IPSec</key>
  			<dict>
  				<key>AuthenticationMethod</key>
  				<string>SharedSecret</string>
  				<key>LocalIdentifierType</key>
  				<string>KeyID</string>
  				<key>SharedSecret</key>
  				<data>
  				${credentials.pskEncoded}
  				</data>
  			</dict>
  			<key>IPv4</key>
  			<dict>
  				<key>OverridePrimary</key>
  				<integer>0</integer>
  			</dict>
  			<key>PPP</key>
  			<dict>
  				<key>AuthName</key>
  				<string>${credentials.user}</string>
  				<key>AuthPassword</key>
  				<string>${credentials.pass}</string>
  				<key>CommRemoteAddress</key>
  				<string>${credentials.server}</string>
  			</dict>
  			<key>PayloadDescription</key>
  			<string>VPN connection to ${credentials.name} DAppNode VPN</string>
  			<key>PayloadDisplayName</key>
  			<string>VPN connection to ${credentials.name} DAppNode VPN</string>
  			<key>PayloadIdentifier</key>
  			<string>DAppNode.VPN.${credentials.otp}</string>
  			<key>PayloadType</key>
  			<string>com.apple.vpn.managed</string>
  			<key>PayloadUUID</key>
  			<string>DAppNode.VPN.${credentials.otp}</string>
  			<key>PayloadVersion</key>
  			<integer>1</integer>
  			<key>Proxies</key>
  			<dict>
  				<key>HTTPEnable</key>
  				<integer>0</integer>
  				<key>HTTPSEnable</key>
  				<integer>0</integer>
  			</dict>
  			<key>UserDefinedName</key>
  			<string>${credentials.name} VPN</string>
  			<key>VPNType</key>
  			<string>L2TP</string>
  		</dict>
  	</array>
  	<key>PayloadDisplayName</key>
  	<string>${credentials.name} VPN</string>
  	<key>PayloadIdentifier</key>
  	<string>DAppNode.${credentials.otp}</string>
  	<key>PayloadRemovalDisallowed</key>
  	<false/>
  	<key>PayloadType</key>
  	<string>Configuration</string>
  	<key>PayloadUUID</key>
  	<string>DAppNode.${credentials.otp}</string>
  	<key>PayloadVersion</key>
  	<integer>1</integer>
  </dict>
  </plist>`
}
