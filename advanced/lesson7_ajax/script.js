var xhr = new XMLHttpRequest();
xhr.open("GET", "textfile.txt", true); //true - asynchronized, false - synchronized;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        alert(xhr.responseText);
    }
};
xhr.send(null);
alert(xhr.responseText);