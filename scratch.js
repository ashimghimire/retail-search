const forge = require('node-forge');

// The PEM-encoded certificate you provided
const pemCertificate = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJAKiUShPZWjYEMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV
BAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTI0
MTEyNDA3MzI0N1oXDTI0MTIxMDE5NDc0N1owMTEvMC0GA1UEAwwmc2VjdXJldG9r
ZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA
A4IBDwAwggEKAoIBAQDKefzd0AnFYOy2MR5791tNAUCbnfZQFvqtpURqbf+guFon
e9jsD2/sqSAsHvgysB1PTw7fJj9NB6rY4i6WfYFMhDGMLscJiUw9YCxm9/DvEG09
DhjV3AFWWP2a2FEMb3d8Tqs6+2zHLCLaIXkcCx7RBmEy8CVTlgyiy6u56VJzC6WW
S9hwD/8gngfLd0avEfJpDigHaDVUv0uKC6ZF8Q67j9lZatksuUwvY1BKYnIZCGy/
xrJrRP24Wx6+RwfD+Fu3fyhs5OjIUIKdLjVeezIwjWZCC8M7qMYF1DfHNVaUK5hI
qUs/aFc3xrMULpBI7daRGDIbDAfIzSoUHLOA/QUvAgMBAAGjODA2MAwGA1UdEwEB
/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G
CSqGSIb3DQEBBQUAA4IBAQCwtyLCBnYIRRvh3y/gjoesRa0hrkSvhTTsC0ghLsZ4
2mz5VSDE9nN2oSv0KKhBwPh8ND2AMNsogQwsaIKosLJHEI9cFJQX4ZApbkIDHLE/
+VtkvTZnRUZ25b9IUBIzGi6mZ9Oj4uKhTXUwn45whYoFNLVwuOlyxOqLwq2yk/OC
DA2YpniVijjNioDj6BTiZVJuBybbqvnSemRVNYxWz5KRTSZzPxs+FyrJYjcvFfHy
V4R2pC4Dm5Cmxp1TFv3C19f9RTwaTAXP3FFVkE5spA0vYXHOeqnvRnjb6y1o2ROc
5vqYAhwS5To89cJq/BhhbCeWeg4TyOuScjw6iwuxwA9B
-----END CERTIFICATE-----`;

try {
  // Convert the PEM certificate to a Forge certificate object
  const cert = forge.pki.certificateFromPem(pemCertificate);

  // Extract the public key from the certificate
  const publicKey = cert.publicKey;

  // Get the modulus and exponent from the public key
  const modulus = publicKey.n.toString(16); // Convert modulus to hexadecimal
  const exponent = publicKey.e.toString(16); // Convert exponent to hexadecimal

  // Print the modulus and exponent
  console.log("Modulus (n):", modulus);
  console.log("Exponent (e):", exponent);
} catch (error) {
  console.error("Error parsing the certificate:", error);
}
