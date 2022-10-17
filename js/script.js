//POPAP IMAGEN GRANDE
const imagengrande = document.getElementById("imagengrande");
ruta2 = document.getElementById("ruta2");

function abririmg(reference) {
    imagengrande.style.display = "flex";
    imagengrande.src = reference
}

function cerrarimg() {
    imagengrande.style.display = "none";
}

//COIGO CLICK IMAGEN CAMBIO DE TEXTO E IMAGEN
let breda = document.getElementById("breda");
breda.onclick = function (reference) {
    ruta.src = "img/breda.jpg"
    ruta2.src = "img/breda.jpg"
    document.getElementById("titulo").innerHTML = "LA RENDICIÓN DE BREDA";
    document.getElementById("año").innerHTML = "1634-35";
    document.getElementById("precio").innerHTML = "<strong>380€</strong>";
    document.getElementById("informacion-cuadro").innerHTML = "Réplica del cuadro en colores originales y tamaño 150 x 80cm";

}
let inocencio = document.getElementById("inocencio");
inocencio.onclick = function () {
    ruta.src = "img/inocencio.jpg"
    ruta2.src = "img/inocencio.jpg"
    document.getElementById("titulo").innerHTML = "EL PAPA INOCENCIO  X";
    document.getElementById("año").innerHTML = "1650";
    document.getElementById("precio").innerHTML = "<strong>280€</strong>";
    document.getElementById("informacion-cuadro").innerHTML = "Réplica del cuadro en colores originales y tamaño  80 X 140cm";

}
let venus = document.getElementById("venus");
venus.onclick = function () {
    ruta.src = "img/venus.jpg";
    ruta2.src = "img/venus.jpg";
    document.getElementById("titulo").innerHTML = "VENUS DEL ESPEJO";
    document.getElementById("año").innerHTML = "1644-1648";
    document.getElementById("precio").innerHTML = "<strong>432€</strong>";
    document.getElementById("informacion-cuadro").innerHTML = "Réplica del cuadro en colores originales y tamaño 230 X 150cm";

}
let meninas = document.getElementById("meninas");
meninas.onclick = function () {
    ruta.src = "img/meninas.jpg";
    ruta2.src = "img/meninas.jpg";
    document.getElementById("titulo").innerHTML = "LAS MENINAS";
    document.getElementById("año").innerHTML = "1616-1660";
    document.getElementById("precio").innerHTML = "<strong>1250€</strong>";
    document.getElementById("informacion-cuadro").innerHTML = "Réplica del cuadro en colores originales y tamaño 400 x 350cm";

}
let vulcano = document.getElementById("vulcano");
vulcano.onclick = function () {
    ruta.src = "img/vulcano.jpg"
    ruta2.src = "img/vulcano.jpg"
    document.getElementById("titulo").innerHTML = "LA FRAGUA DE VULCANO";
    document.getElementById("año").innerHTML = "1630";
    document.getElementById("precio").innerHTML = "<strong>375€</strong>";
    document.getElementById("informacion-cuadro").innerHTML = "Réplica del cuadro en colores originales y tamaño 170 X 120cm";

}
