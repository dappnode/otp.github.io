import base64url from 'base64url';
import { Base64 } from 'js-base64';
import getJsonFromUrl from './getJsonFromUrl';
import './generateSampleOTP'

const OTP_VARIABLE_TAG = 'otp';

export default function() {
  var urlVariables = getJsonFromUrl(true);

  // Make sure the link only contains the otp variable
  if (!(OTP_VARIABLE_TAG in urlVariables)) {
    console.error('incorrect url format, no otp variable found');
    return;
  }
  var encodedOTP = urlVariables[OTP_VARIABLE_TAG];

  // Make sure the decoded OTP is valid an can be safely parsed
  var decodedOTP = base64url.decode(encodedOTP);
  var credentials;

  try {
    credentials = JSON.parse(decodedOTP);
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('Syntax Error, invalid otp: ',decodedOTP)
      return;
    } else {
      console.error(e);
      return;
    }
  }

  // Make sure the credentials object has all required keys
  var requiredKeys = ['name','pass','psk','server','user']
  requiredKeys.forEach(function(key) {
    if (!(key in credentials)) {
      console.error('The OTP is missing a required key: ',key,credentials)
      return;
    }
  });

  // Append extra credentials
  credentials.pskEncoded = Base64.encode(credentials.psk)
  credentials.otp = encodedOTP
  credentials.VPNType = 'L2TP over IPSec'

  // Return the valid credentials object
  return credentials;

};
