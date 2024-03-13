

if (accessToken === null) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
    const accessToken = localStorage.getItem('ERG__TOKEN');
}
console.log (accessToken)
    navigator.clipboard.writeText(accessToken);
    
  