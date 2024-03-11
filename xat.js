const accessToken = localStorage.getItem('ERG__TOKEN');

if (accessToken.length && accessToken.length < 10 < 10) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
}
console.log (accessToken)
    navigator.clipboard.writeText(accessToken);
    
  