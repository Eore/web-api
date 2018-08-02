module.exports = [
  {
    method: "POST",
    url: "/login",
    controller: "auth/login",
    privillage: ["*"]
  },
  {
    method: "GET",
    url: "/refresh-token",
    controller: "auth/refreshToken",
    privillage: ["*"]
  }
];
