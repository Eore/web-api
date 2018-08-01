module.exports = [
  {
    method: "POST",
    url: "/login",
    controller: "auth/login",
    privillage: ["guest"]
  },
  {
    method: "GET",
    url: "/refresh-token",
    controller: "auth/refreshToken",
    privillage: ["guest"]
  }
];
