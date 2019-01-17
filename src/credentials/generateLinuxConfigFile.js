export default function(credentials) {
  var linuxConfigFile = templateLinuxConfig(credentials);
  return linuxConfigFile
}

function templateLinuxConfig(credentials) {
  return `#org.freedesktop.NetworkManager.l2tp

[connection]
id=${credentials.name}

[vpn]
gateway=${credentials.server}
user=${credentials.user}
ipsec-enabled=true
ipsec-psk=${credentials.psk}
ipsec-ike=aes128-sha1-modp1024,3des-sha1-modp1024!
ipsec-esp=aes128-sha1-modp1024,3des-sha1-modp1024!

[ip4]
method=auto
routes=172.33.0.0/16 via 172.33.0.1;
ignore-auto-routes=false
ignore-auto-dns=false
dhcp-send-hostname=true
never-default=true`
}
