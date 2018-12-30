import base64url from "urlsafe-base64";

window.generateSampleOTP = function() {
  const test = {
    server: "SERVER_IP",
    name: "SERVER_NAME",
    user: "VPN_USER",
    pass: "VPN_PASSWORD",
    psk: "SERVER_PSK"
  };

  const decodedOTP = JSON.stringify(test);
  const otpEncoded = base64url.encode(Buffer.from(decodedOTP, "utf8"));
  console.log(window.location);
  const url =
    window.location.origin + process.env.PUBLIC_URL + "/#otp=" + otpEncoded;
  console.log(url);
};
