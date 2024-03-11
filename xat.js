const accessToken = localStorage.getItem('ERG__TOKEN');

if (accessToken.length < === null) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
}
console.log (accessToken)
    navigator.clipboard.writeText(accessToken);
    
  