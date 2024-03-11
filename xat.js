const accessToken = localStorage.getItem('ERG__TOKEN');

if (accessToken === null) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
}
    navigator.clipboard.writeText(accessToken);
    
    //