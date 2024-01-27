
const suma = (a, b) => a + b;

document.addEventListener("DOMContentLoaded", function () {

    var h1 = document.createElement("h1");
    h1.textContent = "1_funcion.js";
    document.body.appendChild(h1);

    var button = document.createElement("button");
    button.textContent = "Volver a index.html";
    button.onclick = function () {
        window.location.href = 'index.html';
    };
    document.body.appendChild(button);
});
