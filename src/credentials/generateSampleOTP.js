import base64url from 'urlsafe-base64';

window.generateSampleOTP = function() {

  var test = {
  "server": "SERVER_IP",
  "name": "SERVER_NAME",
  "user": "VPN_USER",
  "pass": "VPN_PASSWORD",
  "psk": "SERVER_PSK" };

  var decodedOTP = JSON.stringify(test);
  var otpEncoded = base64url.encode(Buffer.from(decodedOTP, 'utf8'));
  console.log(window.location)
  var url = window.location.origin + process.env.PUBLIC_URL + '/#otp=' + otpEncoded;
  console.log(url)

}
