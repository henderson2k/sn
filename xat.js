

if (accessToken === null) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
}
console.log (accessToken)
    navigator.clipboard.writeText(accessToken);
    
  