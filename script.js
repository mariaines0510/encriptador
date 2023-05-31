const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

let bandera = false; //bandera para saber si ya un texto fue encripatdo

function encriptar(){

    let textoCifrado = textArea.value
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(document.getElementById("textArea").value.length == 0 ){
        alert("Debe ingresar un texto");
        var elemento = document.getElementById("mensaje");
        elemento.style.backgroundImage = "url('./img/img.png')";
    }else{
        bandera = true;
        document.getElementById("textArea").value = "";
    
        document.getElementById("mensaje").value = textoCifrado;
        mensaje.style.backgroundImage = "none";
    }
}

function desencriptar(){
    let textoDesifrado = textArea.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(document.getElementById("textArea").value.length == 0 ){
        if(bandera){
            alert("Debe copiar el texto encriptado");
        }else{
        alert("Debe encriptar un texto y luego copiar el texto encriptado");
        }
    }else{

        document.getElementById("textArea").value = "";
        document.getElementById("mensaje").value = textoDesifrado;

        mensaje.style.backgroundImage = "none";
    }

    bandera = false;
    
}

function copiar(){
    textArea.value = mensaje.value;
    mensaje.value = "";   

    //vuelve a asiganr la img al textarea de fondo
    var elemento = document.getElementById("mensaje");
    elemento.style.backgroundImage = "url('./img/img.png')";

    
}



