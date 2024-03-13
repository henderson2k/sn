const accessToken = sessionStorage.getItem('ERG__TOKEN') || localStorage.getItem('ERG__TOKEN');

if (accessToken) {
    navigator.clipboard.writeText(accessToken)
        .then(() => console.log('Access token copied to clipboard'))
        .catch(error => console.error('Error copying access token to clipboard:', error));
} else {
    console.error('Access token not found in sessionStorage or localStorage');
}

  