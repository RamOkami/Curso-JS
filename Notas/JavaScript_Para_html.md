# JS PARA CREACION DE PAGINAS WEB

## FETCH

Es una api nativa de JS basada en promesas con una pagina web, utilizada para realizar solicitudes HTTP sin necesidad de cargar la pagina.

### CODIGO
```js
fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response) => { 
        // transforma todos los datos recibidos a un json
        return response.json()
    }).then(
    (data) => {
        console.log(data)
    }
)
```

## DOM

El dom es todo el dominio de los archivos HTML en JS ya no solo sirve para leer el archivo HTML sino que te permite manipular y darle funcionalidad a una pagina web.

### CODIGO DE TESTING HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>
</head>
<body>
    <h1 id="titulo-principal">Hola Mundo</h1>
    <p id="texto">Este es un párrafo.</p>
    <button id="boton">Haz clic aquí</button>
</body>
<script src="app.js" ></script>
</html>
```
#

### CODIGOS JS

#### SELECCION POR ID:
```js
let titulo = document.getElementById('titulo-principal');
```
Esta funcion sirve para tomar un elemento u etiqueta en base a su id de nuestro archivo html y posteriormente modificarla.
#

#### MODIFICAR POR CONTENIDO DE TEXTO:
```js
titulo.textContent = '¡Bienvenido a mi Web!';
```
La funcion **.textContent** nos permite modificar solo el texto de la etiqueta que estamos seleccionando.
#

#### MODIFICAR ESTRUCTURA HTML:
```js
titulo.innerHTML = '¡Click <a href="https://www.google.com">aqui</a>!';
```
La funcion **.innerHTML** permite modificar una estructura completa del archivo html dandonos la libertad de agregar mas secciones y etiquetas.
#

#### MODIFICACIONES DE CSS:
```css
titulo.style.color = 'purple';
titulo.style.fontSize = '40px';
```
Las funciones de tipo **.style** nos permite modificar directamente el css de la etiqueta con el id que tenemos seleccionado, dando la opcion de estilizar de forma dinamica sitios web.
#

#### EVENTOS:
```js
boton.addEventListener('click', function (){});
```
La funcion de tipo **.addEventListener** nos permite ejecutar un evento cuando se interactua con un elemento que nos lo permita, como puede ser en este caso un boton, y se realizara una accion.

* Ejemplo
```js
let boton = document.getElementById('boton');
let titulo = document.getElementById('titulo-principal');

boton.addEventListener('click', function (){
    titulo.innerHTML = '¡Se ha presionado el boton!';
});
```
En este caso, al presionar el boton se ejecutara la funcion anonima que en su interior tiene un **.innerHTML** lo que cambiara el contenido del titulo de la pagina web, pasando de:
#### // **Hola Mundo --> ¡Se ha presionado el boton!** 
