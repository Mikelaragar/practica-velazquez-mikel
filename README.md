# PRÁCTICA VELAZQUEZ - *IAW 2º ASIR* 
### MIKEL ARAMBARRI GARCÍA
En esta actividad hemos desarrollado una aplicacion web de los cuadros de velazquez.
Hemos usado **git** para el sistema de versiones del trabajo para tener todas las versiones antiguas de nuestro codigo.
Hemos utilizado **javascript**  para la interaccion de las imagenes y que cambie el contenido y del popup de la imgagen cuando le das click.

El codigo de la práctica estará alojado en [github](https://github.com/Mikelaragar/practica-velazquez-mikel):

#### Lenguajes usados:
- HTML
- CSS
- JAVASCRIPT
#### Estructura de nuestro trabajo:

```
velazquez-mikel
│   README.md
│   index.html    
│   .idea
│   .gitignore   
└───css
│   │   style.css
│   │
│   └───js
│       │   script.js
│   
└───img
    │   (TODAS LAS IMAGENES USADAS)
```
#### PROCESO
1. Creccion repositorio en ``git``.
2. Estructura ``HTML`` .
3. Formato de la pagina ``CSS``.
4. Interaccion de las imganes de popup y cambio de imagen ``Javascript``.
5. Subir el codigo a ``github``.
---
## GIT
#### .gitgonre
Para el trabajo he configurado el archivo ``.gitignore`` en el directorio del trabajo para que se ignoren los archivos/ directorios.
En este caso solo he añaido para que me ignore el directorio oculto creado ``.idea``.

- Para crear el directorio del repositorio de git de nuestro trabajo he usado el siguiente comando: 
````markdown 
git init "velazquez-mikel"
````
- He usado status en el proceso de las versiones para comprobar los archivos preparados,no rastrados y modificados.
````markdown
git stautus
````
- Para añdir todo el contenido del directorio de trabajo:
````markdown
git add .
````
- Para confirmar los diferentes commit que se han realizado para tener todas las versiones del trabajo: 
````markdown
- git commit -m "nombre"
````
- Para comprobar todos los commit numero id de cada commit,hora realizad... y comprobar en que 
````markdown
git log
````
Para subir el trabajo a [github](https://github.com/Mikelaragar/practica-velazquez-mikel):
````markdown
git remote add origin https://github.com/Mikelaragar/practica-velazquez-mikel.git
git branch -M main
git push -u origin main
````
---
## HTML

En el documento html he creado la estructura de la pagina web, lo he divido en divs y en etiquetas estructuración.
 ````html
<!doctype html>
<html lang="es">
<head>
    <title>Velazquez</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
    <h1></h1
</header>
<main>
    <section>
        <div class="box">
            <nav id="lateral">
       		(IMAGENES)         
            </nav>

            <div class="foto">
		(IAMEGEN GRANDE)
            </div>
            <div id="imagengrande" class="imggrande">
		(IMAGEN GRANDE POPUP)
            </div>
            <div class="texto">
		(TEXTO)
            </div>
        </div>
    </section>
</main>
</body>
<script src="js/script.js"></script>
</html>
````
---
## CSS
###### Estructura:
La parte del titulo ``header`` tiene una altura de 100px.
````css
    width: 100%;
    height: 100px;
````

Se ha realizado con la propiedad flex para usar la utilidad flexbox las tres cajitas del ``nav``, parte de la imgagen grande ``imagen`` y parte del texto de los cuadros``texto``.

Esto nos va permitir distribuir el espacio de los las partes.
Todo esto en un div llamado ``box`` y con direccion row --> el eje principal correrá a lo largo de la fila
````css
display: flex;
flex-direction: row;
````
La parte de de la ``foto`` grande y del ``texto`` del cuadro ocupa el 50% de la pagina:
````css
.foto {
    display: flex;
    margin-left: 10px;
    left: 200px;
    width: 50%;
    height: 100%;

}
.texto {
    width: 50%;
    padding: 1%;
    top: 35%;
    height: 25%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    float: left;
}
````
``nav``-> De las imagenes pequeñas tienen que tener
````css
nav {
    width: 200px;
    height: 50em;
    overflow-y: scroll;
}
````

La letra usada es Monserrat de google fonts con 2 grosores: 200 y 700.
````css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;800&display=swap');
/* Fuente selecionada*/
font-family: 'Montserrat', sans-serif;
/* Dependiendo del tamño*/
font-weight: 200;
````
Animaccion boton de compra y hover del boton, he usado la propiedad css ``:hover`` para que cuando pase el raton cambie de color.
````css
button:hover {
    background-color: #04c5c0;
}
````
Color blanco y gris de las imagenes pequeñas del ``nav``.
````css
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
````
---
## JAVASCRIPT
Me ha costado bastante esta parte porque el año pasado usamos jquery y cambian bastantes cosas, he tenido que buscar informacion por internet para poder realizar los siguientes ejercicios.
#### POPUP IMAGEN
AL hacer click en la imagen se hace grande con fondo negro y que puedas volver con haciendo click para esto he capruturarlo el id de la imagen, con las funciones con el ``style.display`` capturarlo: 
````javascript
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
````
Y con el **CSS** para ponerlo en grande:
````css
.imggrande {
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    position: fixed;
    justify-content: center;
    z-index: 1;
    display: none;
}
````
#### Cambio de contenido de la imagen grande y texto
En este caso he capturado variables de las imagenes pequeñas y con ``.innerHTML`` para cambiar el contenido y insertar el nuevo.

Esta forma no es muy buena porque hay mucho codigo y se prodia hacer de otra manera mas facil simplificando mucho el codigo.
````javascript
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
````
---
### Dificultad de la práctica
[]  Facil
[x] Medio
[] Dificil

|       | Dificultad |
|--------------|------------|
| GIT      | Facil      |
| HTML        | Facil      |
| CSS       | Facil |
| JSS  | Dificil    |

### Opinion de la práctica

La practica me ha gustado porque ha sido un recordatorio de todo lo que hemos dado de lenguajes de marcas el año pasado, lo que mas me ha costado ha sido ``javascript`` porque el año lo dimos muy rapido y usamos ``jquery`` lo demas me ha parecido facil aunque necesitas tiempo para hacerlo.