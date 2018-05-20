import base64url from 'urlsafe-base64';

window.generateSampleOTP = function() {

  var test = {
  "server": "127.0.0.1",
  "name": "Sample DAppNode Server",
  "user": "vpn_user",
  "pass": "MC4xORandomPass",
  "psk": "TI3LjRandomPSK" };

  var decodedOTP = JSON.stringify(test);
  var otpEncoded = base64url.encode(Buffer.from(decodedOTP, 'utf8'));
  console.log(window.location)
  var url = window.location.origin + process.env.PUBLIC_URL + '/#otp=' + otpEncoded;
  console.log(url)

}
