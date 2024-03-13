let accessToken;
accessToken = sessionStorage.getItem('ERG__TOKEN');
if (accessToken === null) {
    
} else {
    
}

console.log(accessToken);
navigator.clipboard.writeText(accessToken);

  