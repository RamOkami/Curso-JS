let boton = document.getElementById('boton');
let titulo = document.getElementById('titulo-principal');


boton.addEventListener('click', function (){
    titulo.innerHTML = '¡Se ha presionado el boton!';
    titulo.style.color = 'purple';
});