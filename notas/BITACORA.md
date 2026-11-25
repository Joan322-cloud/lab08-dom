# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

Primero probe desde la consola. `document.querySelector("#titulo")` me devolvio el h1. Con `textContent = "Hola desde la consola"` el titulo cambio en pantalla, pero al recargar con F5 volvio a decir "Mi primera pagina interactiva".

Despues lo hice desde `app.js`. El titulo quedo en azul con "Hola TECSUP", el parrafo con fondo amarillo y la lista con tres elementos: HTML, CSS y JavaScript.

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde la consola | El titulo paso a "Hola desde la consola" | No |
| textContent desde app.js | El titulo paso a "Hola TECSUP" | Si |
| style.color | El titulo se puso azul | Si |
| classList.add("destacado") | El parrafo tomo fondo amarillo | Si |
| createElement + appendChild | La lista tiene un tercer elemento: JavaScript | Si |

El cambio de la consola no se mantiene porque solo cambia el DOM en ese momento. Al recargar el navegador vuelve a leer el archivo HTML y arma el arbol de nuevo. Lo de `app.js` se mantiene porque se ejecuta cada vez que carga la pagina.

## Ejercicio 3: Evento click

Escribi el contador. Con tres clics en Sumar 1 el contador llego a 3, y en la consola salieron tres lineas con `click` y el boton. Con Reiniciar volvio a 0.

Cambie solo el tipo de evento del boton Sumar 1 y probe cada uno:

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Un clic en el boton | 1 |
| dblclick | Dos clics seguidos (un clic solo no hizo nada, el contador siguio en 0) | 1 por cada doble clic |
| mouseover | Pasar el mouse por encima del boton, sin hacer clic | 1 cada vez que el mouse entra al boton (al salir y volver a entrar sumo otra vez, quedo en 2) |

- `evento.type` mostro el tipo de evento que ocurrio, en este caso `click`.
- `evento.target` mostro el elemento que recibio el evento: el boton Sumar 1 (`btnSumar`).

Al terminar deje el evento otra vez en `"click"`.

## Ejercicio 4: Eventos input y submit

Con el evento `input` el texto "Hola, ..." cambia mientras escribo. Cuando escribi "Sebastian" quedo "Hola, Sebastian".

Sin `preventDefault` el formulario recargo la pagina: el resultado quedo vacio, el campo de correo tambien y la direccion del navegador termino en `/?`. Con `evento.preventDefault()` la pagina ya no se recarga y el codigo decide que mostrar.

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El texto cambio letra por letra hasta "Hola, Sebastian" | No |
| Enviar sin preventDefault | Se recargo la pagina y el resultado y el campo de correo quedaron vacios | Si |
| Enviar con preventDefault, correo sin @ | Salio "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Salio "Enviado: sebastian@correo.com" sin rojo | No |

## Ejercicio 5: Clases y objetos

Cree la clase `Producto` y tres objetos. Comprobe en la consola y con la calculadora:

- `laptop.descripcion()` dio `Laptop - S/ 2500.00`.
- `mouse.conDescuento(0.25)` dio 33.75 (45 x 0,75).
- `teclado.conDescuento(0.10)` dio 108 (120 x 0,90).

Probe tambien llamar la clase sin `new` y la consola mostro: `Class constructor Producto cannot be invoked without 'new'`.

| Objeto | nombre | precio | conDescuento(0.25) |
|---|---|---|---|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |

Agregue un cuarto objeto, `monitor` (Monitor, 680), al arreglo y aparecio en la lista de la pagina sin tocar el HTML.

- La ventaja de la clase es que escribo una sola vez que datos y metodos tiene un producto y despues creo todos los que quiera con `new`.
- Si cambio la forma de mostrar el producto, solo cambio `descripcion()` y se actualizan todos, en vez de editar cada linea del HTML.
