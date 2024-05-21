const accessToken = sessionStorage.getItem('XSRF-TOKEN') || localStorage.getItem('XSRF-TOKEN');

if (accessToken) {
    navigator.clipboard.writeText(accessToken) 
} else {
    console.error('Access token not found in sessionStorage or localStorage');
}