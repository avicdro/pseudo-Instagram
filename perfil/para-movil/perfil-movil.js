/* Desplegar menu */

let $cuerpoApp = document.getElementById('cuerpo-app');
let $menuDesplegable1 = document.getElementById('menu-opciones-1');
let $menuDesplegable2 = document.getElementById('menu-opciones-2');
let $menuDesplegable3 = document.getElementById('menu-opciones-3');
let $icono = document.getElementById('icono');

$menuDesplegable1.addEventListener('touchstart',(event)=>{
    $cuerpoApp.classList.add('ver-opciones');
    $menuDesplegable2.parentNode.classList.add('activado');
});
$menuDesplegable3.addEventListener('touchstart',(event)=>{
    $cuerpoApp.classList.remove('ver-opciones');
    $menuDesplegable2.parentNode.classList.remove('activado');
});