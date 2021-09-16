import { Auth, AUTH_STRATEGIES } from "@8base/auth";

const domain =
  "https://6141333fe0de77000913e554.auth.us-east-1.amazoncognito.com";
const clientId = "m8urc7ggf6tdo1klr3qahnvpu";
const logoutRedirectUri = `https://tasklist-manuel1345.netlify.app/login`;
const redirectUri = `https://tasklist-manuel1345.netlify.app/`;

export const login = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_8BASE_COGNITO,
    subscribable: true,
  },
  {
    domain,
    clientId,
    redirectUri,
    logoutRedirectUri,
  }
);

console.log(login.checkIsAuthorized());
