import base64url from "urlsafe-base64";
import getJsonFromUrl from "./getJsonFromUrl";

const OTP_VARIABLE_TAG = "otp";

// Parses orl url:
//
// https://dappnode.github.io/DAppNode_OTP/#otp=acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234

export default function() {
  const urlVariables = getJsonFromUrl(true);

  // Make sure the link only contains the otp variable
  if (!(OTP_VARIABLE_TAG in urlVariables)) {
    throw Error("incorrect url format, no otp variable found");
  }
  const encodedOTP = urlVariables[OTP_VARIABLE_TAG];

  // Make sure the decoded OTP is valid an can be safely parsed
  const decodedOTP = base64url.decode(encodedOTP);
  let credentials;

  try {
    credentials = JSON.parse(decodedOTP);
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw Error("Syntax Error, invalid otp: ", decodedOTP);
    } else {
      throw e;
    }
  }

  // Make sure the credentials object has all required keys
  const requiredKeys = ["name", "pass", "psk", "server", "user"];
  requiredKeys.forEach(key => {
    if (!(key in credentials)) {
      throw Error("The OTP is missing a required key: ", key, credentials);
    }
  });

  // Append extra credentials
  credentials.otp = encodedOTP;

  // Return the valid credentials object
  return credentials;
}

// For testing, create a sample OTP

window.generateSampleOTP = () => {
  const decodedOTP = JSON.stringify({
    server: "SERVER_IP",
    name: "SERVER_NAME",
    user: "VPN_USER",
    pass: "VPN_PASSWORD",
    psk: "SERVER_PSK"
  });
  const otpEncoded = base64url.encode(Buffer.from(decodedOTP, "utf8"));
  const url = `${window.location.origin}${
    process.env.PUBLIC_URL
  }/#otp=${otpEncoded}`;
  window.location.replace(url);
  window.location.reload();
};
