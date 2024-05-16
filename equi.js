fetch("https://eqcasv6-new/EQWebClient/systemmanager/api/devices/embedded/21309", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-xsrf-token": "HUgQgRgY2OEsyd4NB6TanMb96pb8CzYN6WBz7gqZ8QgbcKRply2WcKf9o-r-JfYrW9UgIMmepJIu_L33uBWkqy2TfQG_XjctKHhPCfyvnJY1"
  },
  "referrer": "https://eqcasv6-new/EQWebClient/Areas/WebSystemManagerUi/wwwroot/?ver=1132827321",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.text())
.then(text => console.log(text))
.catch(error => console.error('Error:', error));