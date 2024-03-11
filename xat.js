const accessToken = localStorage.getItem('ERG__TOKEN');

if (accessToken == null) {
    const accessToken = sessionStorage.getItem('ERG__TOKEN');
} else {
    const accessToken = localStorage.getItem('ERG__TOKEN');
}

    navigator.clipboard.writeText(accessToken);