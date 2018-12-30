// New url: https://dappnode.github.io/otp/#acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234acbdeacbedb12341234
// New url (admin): 104.248.150.201&PdJqRTPgxTFXkK8GseP6&&6BzcwMaqTGGsSVTgFx9F&lionDAppnode
// s=104.192.192.192
// s=73bf73bf73bf73bf.dyndns.dappnode.io
// x=PdjqPdjqPdjqPdjqPdjq
// u=dappnode_admin
// p=6Bzc6Bzc6Bzc6Bzc6Bzc
// n=lionDAppnode

const isHex = h => parseInt(h, 16).toString(16) === h;

export default function() {
  const pos = window.location.href.indexOf("#");
  if (pos === -1) throw Error("No # present in url");
  const query = window.location.href.substr(pos + 1);

  if (!query.includes("&")) throw Error("hash must include at least one #");

  const params = query.split("&");

  if (params.length !== 5)
    throw Error("The hash query must contain exactly 5 parameters");

  const decode = {
    // To optimize the server address, if a hex string is passed
    // it is assumed to be the subdomain of the default dyndns provider
    server: input => {
      if (input.startsWith("otp=")) {
        console.error(
          'WARNING! wrongly encoded url, the new format should not be prepended by "otp="'
        );
        input = input.split("otp=")[1];
      }
      if (isHex(input)) return `${isHex}.dyndns.dappnode.io`;
      else return decodeURIComponent(input);
    },
    psk: decodeURIComponent,
    // If no user is provided, assume it is the default admin user
    user: input => {
      if (!input) return "dappnode_admin";
      else return decodeURIComponent(input);
    },
    pass: decodeURIComponent,
    name: input => {
      if (!input) return "DAppNode VPN";
      input = decodeURIComponent(input);
      const inputLc = input.toLowerCase();
      if (!inputLc.includes("dappnode") && !inputLc.includes("vpn"))
        return `${input} DAppNode VPN`;
      if (!inputLc.includes("dappnode") && inputLc.includes("vpn"))
        return `${input} DAppNode`;
      if (inputLc.includes("dappnode") && !inputLc.includes("vpn"))
        return `${input} VPN`;
      return input;
    }
  };

  const credentials = {
    server: decode.server(params[0]),
    psk: decode.psk(params[1]),
    user: decode.user(params[2]),
    pass: decode.pass(params[3]),
    name: decode.name(params[4])
  };

  // Append extra credentials
  credentials.otp = query;

  // Return the valid credentials object
  return credentials;
}

window.generateSampleOTPNew = () => {
  const otpEncoded = [
    // server address
    "73bf73bf73bf73bf",
    // PSK
    "PdjqPdjqPdjqPdjqPdjq",
    // user, default admin
    "",
    // password
    "6Bzc6Bzc6Bzc6Bzc6Bzc",
    // DAppNode's name
    "lionDAppnode"
  ]
    .map(encodeURIComponent)
    .join("&");
  const url = `${window.location.origin}${
    process.env.PUBLIC_URL
  }#${otpEncoded}`;
  window.location.replace(url);
  window.location.reload();
};
