let accessToken;

if (accessToken === null) {
    
} else {
    accessToken = localStorage.getItem('ERG__TOKEN');
}

console.log(accessToken);
navigator.clipboard.writeText(accessToken);

  