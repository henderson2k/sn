let accessToken;
accessToken = sessionStorage.getItem('ERG__TOKEN');
if (accessToken === null) {
    
} else {
    accessToken = localStorage.getItem('ERG__TOKEN');
}

console.log(accessToken);
navigator.clipboard.writeText(accessToken);

  