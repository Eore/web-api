let crypto = require("crypto");

exports.encrypt = data =>
  crypto
    .createHmac("sha512", "miawmiaw")
    .update(JSON.stringify({ data, key: "miawmiaw" }))
    .digest("hex");

exports.base64 = data => {
  let plain = Buffer.from(data, "base64")
    .toString("ascii")
    .split(":");
  return [plain[0], plain[1]];
};
