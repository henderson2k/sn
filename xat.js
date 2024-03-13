let accessToken;

if (accessToken === null) {
    accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
    accessToken = localStorage.getItem('ERG__TOKEN');
}

console.log(accessToken);
navigator.clipboard.writeText(accessToken);

  