

if (accessToken == null) {
    const accessToken = localStorage.getItem('ERG__TOKEN');
} else {
    console.log("The value is not null.");
}


const accessToken = localStorage.getItem('ERG__TOKEN');
  
    navigator.clipboard.writeText(accessToken);