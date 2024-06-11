
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
            console.log(allMatches);
            // alert('Unique matches copied to clipboard!');
        }).catch(function(error) {
            console.error('Error copying text: ', error);
            alert('Error copying text. See console for details.');
        });
    })();
}, 5000);
