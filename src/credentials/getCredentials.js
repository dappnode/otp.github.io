// import getCredentialsFromUrl from './Modules/getCredentialsFromUrl';
// import selectorOS from './Modules/selectorOS';
// import selectorUser from './Modules/selectorUser';
// import credentialsDisplay from './Modules/credentialsDisplay';
// import errorDisplay from './Modules/errorDisplay';
// import downloadLink from './Modules/downloadLink';
// import generateMobileConfigFile from './Modules/generateMobileConfigFile';
import getCredentialsFromUrl from "./getCredentialsFromUrl";
import getCredentialsFromUrlNew from "./getCredentialsFromUrlNew";
import { Base64 } from "js-base64";

let credentials;

// Old url
try {
  credentials = getCredentialsFromUrl();
} catch (e) {
  // New url
  try {
    credentials = getCredentialsFromUrlNew();
  } catch (e) {
    console.error(`Error decoding new url: ${e.stack}`);
    console.error(`Error decoding old url: ${e.stack}`);
  }
}

if (credentials) {
  // Append extra credentials
  credentials.pskEncoded = Base64.encode(credentials.psk);
  credentials.VPNType = "L2TP over IPSec";
}

export default function getCredentials() {
  return credentials;
}

// if (credentials) {
//   generateMobileConfigFile(credentials);
//   credentialsDisplay(credentials);
//   selectorUser()
//   selectorOS(optionsOS, userAgent);
//   downloadLink(credentials, userAgent);
// } else {
//   errorDisplay();
// }
