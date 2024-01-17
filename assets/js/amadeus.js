const client_id = 'DPOGclNa3dVjsmG4QsOGkWma6';
const client_secret = 'HlDlG0ReUiUk0GWh';
const ACCESS_TOKEN = { token: "", tokenType: "" };

async function post(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  });
  const tokenData = await response.json();
  const token = {
    token: tokenData.access_token,
    tokenType: tokenData.token_type
  }
  console.log(token);
  return token;
}

async function init() {
  const token = await post("https://test.api.amadeus.com/v1/security/oauth2/token");
  ACCESS_TOKEN.token = token.token;
  ACCESS_TOKEN.tokenType = token.tokenType;
  return true;
}

async function makeCall() {
  const url = "https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200";
  const authString = `${ACCESS_TOKEN.tokenType} ${ACCESS_TOKEN.token}`;
  const response = await fetch(url, {
    headers: {
      'Authorization': authString
    }
  });
  console.log(await response.json());
}

init().then(makeCall);