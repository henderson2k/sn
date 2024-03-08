const accessToken = sessionStorage.getItem('ERG__TOKEN');
//console.log('Access token:', accessToken);
    
    
    navigator.clipboard.writeText(accessToken);