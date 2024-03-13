let accessToken;
accessToken = sessionStorage.getItem('ERG__TOKEN');
if (accessToken === null) {
    accessToken = localStorage.getItem('ERG__TOKEN');
} else {
}

console.log(accessToken);
navigator.clipboard.writeText(accessToken);

  