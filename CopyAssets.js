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
        message.textContent = 'Hello, world!';
        document.body.appendChild(message);
      

        setTimeout(() => {
            message.remove();
        }, 1000);
    }).catch(function(error) {
        console.error('Error copying text: ', error);
        alert('Error copying text. See console for details.');
    });
})();
