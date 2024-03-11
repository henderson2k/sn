

if (accessToken == null) {
    const accessToken = localStorage.getItem('ERG__TOKEN');
} else {
    const accessToken = localStorage.getItem('ERG__TOKEN');
}

    navigator.clipboard.writeText(accessToken);