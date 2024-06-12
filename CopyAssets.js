(function() {
    var matchesSet = new Set();
    var elements = document.querySelectorAll('body *');
    elements.forEach(function(element) {
        var text = element.innerText.trim();
        var regex = /[DM]\d{5}/g;
        var match;
        while ((match = regex.exec(text)) !== null) {
            matchesSet.add(match[0]);
        }
    });

    var allMatches = Array.from(matchesSet).join('\n');
    
    navigator.clipboard.writeText(allMatches).then(function() {
        const message = document.createElement('div');
        const msg = document.body.appendChild(document.createElement('div'));

// Show message for 1 second
//const message = document.createElement('div');
message.textContent = allMatches;
message.style.position = 'fixed';
message.style.top = '50%';
message.style.left = '50%';
message.style.transform = 'translate(-50%, -50%)';
message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
message.style.color = 'white';
message.style.padding = '20px';
message.style.borderRadius = '10px';
message.style.zIndex = '9999';
document.body.appendChild(message);

setTimeout(() => {
  // Remove message after 1 second
  message.remove();
}, 1000);

    }).catch(function(error) {
        console.error('Error copying text: ', error);
        alert('Error copying text. See console for details.');
    });
})();
