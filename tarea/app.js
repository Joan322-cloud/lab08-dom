// Tarea Lab 08: lista de tareas de estudio (DOM + eventos + clase propia)

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

const formTarea = document.querySelector("#formTarea");
const titulo = document.querySelector("#titulo");
const curso = document.querySelector("#curso");
const mensaje = document.querySelector("#mensaje");
const listaTareas = document.querySelector("#listaTareas");
const pendientes = document.querySelector("#pendientes");

let cantidadPendientes = 0;

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
