let textarea = document.getElementById ("input");
let resultado = document.getElementById ("resultado");
let botonCopiar = document.querySelector ("#derecha #boton button");
let regex = /^[a-z !]+$/;    

function check() {
    let contenido = textarea.value;
    contenido = contenido.trim();
    if (contenido != ""){
        let valido = regex.test (contenido);
        if (!valido) {
            alert ("Solo se aceptan letras minúsculas y sin acentos");
            textarea.value = "";
        }
    }
}

function encriptar(){
    let contenido = textarea.value;
    contenido = contenido.replaceAll("e", "enter");
    contenido = contenido.replaceAll("i", "imes");
    contenido = contenido.replaceAll("a", "ai");
    contenido = contenido.replaceAll("o", "ober");
    contenido = contenido.replaceAll("u", "ufat");
    resultado.textContent = contenido;
    botonCopiar.classList.remove("oculto");
}

function desencriptar(){
    let contenido = textarea.value;
    contenido = contenido.replaceAll("enter", "e");
    contenido = contenido.replaceAll("imes", "i");
    contenido = contenido.replaceAll("ai", "a");
    contenido = contenido.replaceAll("ober", "o");
    contenido = contenido.replaceAll("ufat", "u");
    resultado.textContent = contenido;
    botonCopiar.classList.remove("oculto");
}

function copiar(){
    navigator.clipboard.writeText(
        resultado.textContent
    ).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch((err) => {
        alert("Error al copiar: ", err);
    });
}