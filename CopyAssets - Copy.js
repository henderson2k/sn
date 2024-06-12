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

            setTimeout(() => {
                const msg = document.body.appendChild(document.createElement('div'));
                Object.assign(msg.style, { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '20px', borderRadius: '10px', zIndex: '9999', whiteSpace: 'pre-line' });
                msg.textContent = 'Hello,\nworld!';
                setTimeout(() => msg.remove(), 1000);
              }, 3000);



             //alert('Unique matches copied to clipboard!', 1000);
        }).catch(function(error) {
            console.error('Error copying text: ', error);
            alert('Error copying text. See console for details.');
        });
    })();


