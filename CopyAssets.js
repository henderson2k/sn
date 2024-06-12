const urlToCheck = 'https://stylelink.ergotron.com/app/carts?org=354';

// Regular expression pattern for the specified URL
const specifiedURLPattern = /^https:\/\/stylelink\.ergotron\.com\/app\/carts\?org=354(.*)/;

// Check if the URL matches the specified pattern
if (specifiedURLPattern.test(urlToCheck)) {
    console.log('URL matches the specified pattern.');
} else {
    console.log('URL does not match the specified pattern.');
}






