# Tarea: Mi componente interactivo

## Componente elegido

Gestor de Tareas Interactivo (To-Do List) con asignacion de prioridad, marcado de tareas completadas y borrado de elementos.

---

## Version 1: solo DOM

Estructura inicial en HTML con renderizado basico desde JavaScript insertando nodos fijos en la lista.

```javascript
const listaTareas = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea inicial de prueba";
listaTareas.appendChild(li);
```
