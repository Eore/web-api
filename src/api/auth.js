module.exports = [
  {
    method: "POST",
    url: "/api/v1/login",
    controller: "auth/login",
    privillage: ["*"]
  },
  {
    method: "GET",
    url: "/api/v1/refresh-token",
    controller: "auth/refreshToken",
    privillage: ["*"]
  }
];
