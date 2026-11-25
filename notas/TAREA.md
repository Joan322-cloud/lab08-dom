# Tarea: Mi componente interactivo

## Componente elegido

Una lista de tareas de estudio. Escribo la tarea y el curso, la agrego a la lista, la marco como hecha o la borro. Arriba de la lista dice cuantas tareas quedan pendientes.

## Codigo principal

```js
// La clase: cada tarea guarda su titulo, su curso y si ya esta hecha
class Tarea {
  constructor(titulo, curso) {
    this.titulo = titulo;
    this.curso = curso;
    this.hecha = false;
  }
  // cambia entre pendiente y hecha
  cambiarEstado() {
    this.hecha = !this.hecha;
  }
  // el texto que se muestra en la pagina
  descripcion() {
    return this.curso + ": " + this.titulo;
  }
}

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  const texto = document.createElement("span");
  texto.textContent = tarea.descripcion();

  const btnHecha = document.createElement("button");
  btnHecha.textContent = "Hecha";
  // evento click: marcar o desmarcar la tarea
  btnHecha.addEventListener("click", () => {
    tarea.cambiarEstado();
    if (tarea.hecha) {
      texto.classList.add("hecha");
      cantidadPendientes = cantidadPendientes - 1;
    } else {
      texto.classList.remove("hecha");
      cantidadPendientes = cantidadPendientes + 1;
    }
    pendientes.textContent = cantidadPendientes;
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  // evento click: borrar la tarea de la pagina
  btnBorrar.addEventListener("click", () => {
    if (!tarea.hecha) {
      cantidadPendientes = cantidadPendientes - 1;
      pendientes.textContent = cantidadPendientes;
    }
    li.remove();
  });

  li.appendChild(texto);
  li.appendChild(btnHecha);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);
}

// evento submit: agregar una tarea nueva
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (titulo.value === "" || curso.value === "") {
    mensaje.textContent = "Completa la tarea y el curso";
    mensaje.classList.add("error");
  } else {
    const tarea = new Tarea(titulo.value, curso.value);
    mostrarTarea(tarea);
    cantidadPendientes = cantidadPendientes + 1;
    pendientes.textContent = cantidadPendientes;
    mensaje.textContent = "Tarea agregada";
    mensaje.classList.remove("error");
    titulo.value = "";
    curso.value = "";
  }
});

// evento input: borra el mensaje cuando el usuario vuelve a escribir
titulo.addEventListener("input", () => {
  mensaje.textContent = "";
  mensaje.classList.remove("error");
});
```

El archivo completo esta en [tarea/app.js](../tarea/app.js).

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|---|---|---|
| Presionar Agregar con los dos campos vacios | Sale "Completa la tarea y el curso" en rojo y no se agrega nada | Si |
| Empezar a escribir en el campo de la tarea despues del error | El mensaje rojo desaparece | Si |
| Agregar "Hacer el lab 08" del curso "Diseno de interfaces" | Aparece "Diseno de interfaces: Hacer el lab 08", los campos se limpian y Pendientes pasa a 1 | Si |
| Agregar una segunda tarea ("Repasar clases y objetos", curso POO) | Aparece abajo de la primera y Pendientes pasa a 2 | Si |
| Presionar Hecha en la primera tarea | El texto se tacha y Pendientes baja a 1 | Si |
| Presionar Hecha otra vez en la misma tarea | Se quita el tachado y Pendientes vuelve a 2 | Si |
| Borrar una tarea que ya estaba hecha | Desaparece de la lista y Pendientes no cambia (se quedo en 1) | Si |
| Borrar una tarea pendiente | Desaparece de la lista y Pendientes baja a 0 | Si |

Con todas estas pruebas la consola no mostro ningun error.

## Por que disene asi mi clase

Elegi `titulo` y `curso` porque son lo que escribo al agregar una tarea, y `hecha` porque cada tarea necesita recordar si ya la termine. Empieza en `false` y no se pide en el constructor porque toda tarea nueva esta pendiente.

El metodo `descripcion()` arma el texto que se muestra, y asi la pagina no tiene que unir curso y titulo cada vez. El metodo `cambiarEstado()` guarda el cambio dentro del objeto, y por eso el boton Hecha solo llama al metodo y luego actualiza la pantalla.
