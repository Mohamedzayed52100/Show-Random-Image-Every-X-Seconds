var el = document.getElementsByTagName('img');
var classlist = [];
for (var i = 0; i < el.length; i++) {
    classlist.push(el[i]);
}

var i = 0;
window.onload = function() {
    setInterval(function() {
        i++;
        var random = Math.floor(Math.random() * el.length);
        el[random].style.zIndex = i + 1;
    }, 2000)
}