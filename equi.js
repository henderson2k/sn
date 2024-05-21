const accessToken = sessionStorage.getItem('ERG__TOKEN') || localStorage.getItem('ERG__TOKEN');

if (accessToken) {
    navigator.clipboard.writeText(accessToken) 
} else {
    console.error('Access token not found in sessionStorage or localStorage');
}