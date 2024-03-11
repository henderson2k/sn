

if (value == null) {
    console.log("The value is null.");
} else {
    console.log("The value is not null.");
}


const accessToken = localStorage.getItem('ERG__TOKEN');
  
    navigator.clipboard.writeText(accessToken);