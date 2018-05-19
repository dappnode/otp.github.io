// import getCredentialsFromUrl from './Modules/getCredentialsFromUrl';
// import selectorOS from './Modules/selectorOS';
// import selectorUser from './Modules/selectorUser';
// import credentialsDisplay from './Modules/credentialsDisplay';
// import errorDisplay from './Modules/errorDisplay';
// import downloadLink from './Modules/downloadLink';
// import generateMobileConfigFile from './Modules/generateMobileConfigFile';
import getCredentialsFromUrl from './getCredentialsFromUrl'

const credentials = getCredentialsFromUrl()

export default function getCredentials() {
  return credentials
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
