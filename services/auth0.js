import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "netkiko20.auth0.com",
    clientID: "9YW7b3F6hLN3t85bbuXmGx336qDBWISN",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
