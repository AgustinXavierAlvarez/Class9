
var button = document.getElementById("boton-ejemplo");
var body = document.querySelector("body");

button.addEventListener("click", function clickHandler(e) {

    console.log(button.classList);

    if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.classList.add("desactive");
        button.innerHTML = "¡Desactivado!";
        body.classList.remove("active_body");
        body.classList.add("desactive_body");
    }
    else {
        button.classList.remove("desactive");
        button.classList.add("active");
        button.innerHTML = "!Activado!";
        body.classList.remove("desactive_body");
        body.classList.add("active_body");
    }
});