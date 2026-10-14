// Tarea Lab 08: Gestor de Tareas Interactivo (v3)

// Clase Tarea con constructor, atributos y metodos
class Tarea {
  constructor(titulo, prioridad) {
    this.id = Date.now();
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerClaseBadge() {
    return "badge badge-" + this.prioridad.toLowerCase();
  }
}

// Clase GestorTareas para administrar la lista
class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregar(tarea) {
    this.tareas.push(tarea);
  }

  eliminar(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  buscar(id) {
    return this.tareas.find((t) => t.id === id);
  }
}

const gestor = new GestorTareas();

// Seleccion del DOM
const formTarea = document.querySelector("#formTarea");
const txtTarea = document.querySelector("#txtTarea");
const selPrioridad = document.querySelector("#selPrioridad");
const msgError = document.querySelector("#msgError");
const listaTareas = document.querySelector("#listaTareas");

// Renderizar la lista en el DOM
function renderizar() {
  listaTareas.innerHTML = "";

  gestor.tareas.forEach((t) => {
    const li = document.createElement("li");
    if (t.completada) li.classList.add("completada");

    const spanTexto = document.createElement("span");
    spanTexto.textContent = t.titulo + " ";

    const spanBadge = document.createElement("span");
    spanBadge.textContent = "[" + t.prioridad + "]";
    spanBadge.className = t.obtenerClaseBadge();

    const divAcciones = document.createElement("div");

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = t.completada ? "Desmarcar" : "Completar";
    btnCompletar.addEventListener("click", () => {
      t.completar();
      renderizar();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "btn-borrar";
    btnBorrar.addEventListener("click", () => {
      gestor.eliminar(t.id);
      renderizar();
    });

    divAcciones.appendChild(btnCompletar);
    divAcciones.appendChild(btnBorrar);

    li.appendChild(spanTexto);
    li.appendChild(spanBadge);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);
  });
}

// Evento submit con validacion
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const titulo = txtTarea.value.trim();

  if (titulo === "") {
    msgError.textContent = "Error: El nombre de la tarea no puede estar vacio.";
    return;
  }

  msgError.textContent = "";
  const nuevaTarea = new Tarea(titulo, selPrioridad.value);
  gestor.agregar(nuevaTarea);

  txtTarea.value = "";
  renderizar();
});

// Evento input para limpiar el error en tiempo real
txtTarea.addEventListener("input", () => {
  if (txtTarea.value.trim() !== "") {
    msgError.textContent = "";
  }
});
const formTarea = document.querySelector("#formTarea");
const txtTarea = document.querySelector("#txtTarea");

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  if (txtTarea.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = txtTarea.value;
  listaTareas.appendChild(li);
  txtTarea.value = "";
});
class Tarea {
  constructor(titulo, prioridad) {
    this.id = Date.now();
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerClaseBadge() {
    return "badge badge-" + this.prioridad.toLowerCase();
  }
}
