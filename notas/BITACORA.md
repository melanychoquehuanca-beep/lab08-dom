# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Microsoft Edge

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                | Se mantiene al recargar (Si/No) |
| ---------------------------- | -------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | Cambio el titulo a 'Hola desde la consola' temporalmente | No                              |
| textContent desde app.js     | Cambio el titulo permanentemente a 'Hola TECSUP'         | Si                              |
| style.color                  | Cambio el color del titulo a azul                        | Si                              |
| classList.add                | Aplico fondo amarillo destacado al parrafo               | Si                              |
| createElement + appendChild  | Agrego un nuevo elemento 'JavaScript' a la lista         | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                     | Cuanto suma por accion     |
| -------------- | ----------------------------------------- | -------------------------- |
| click          | Un clic izquierdo sobre el boton          | Suma 1                     |
| dblclick       | Un doble clic rapido sobre el boton       | Suma 1 por cada doble clic |
| mouseover      | Pasar el puntero del mouse sobre el boton | Suma 1 al pasar por encima |

- **evento.type:** Muestra el nombre exacto del evento ejecutado (ejemplo: `click`).
- **evento.target:** Devuelve el elemento HTML especifico que recibio la interaccion (ejemplo: `<button id="btnSumar">`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                         | Se recargo la pagina (Si/No) |
| --------------------------------------- | --------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | Actualizo el texto del saludo letra por letra en tiempo real    | No                           |
| Enviar sin preventDefault               | El mensaje de envio aparecio y desaparecio al instante          | Si                           |
| Enviar con preventDefault, correo sin @ | Muestra el mensaje de error en rojo 'Correo no valido: falta @' | No                           |
| Enviar con preventDefault, correo con @ | Muestra el mensaje 'Enviado: correo@ejemplo.com'                | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510.00             |

_Ventaja de usar clases:_ Permite instanciar multiples objetos con la misma estructura y metodos sin duplicar codigo en HTML o JavaScript, facilitando la escalabilidad del sistema.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina            | Correcto (Si/No) |
| --------------- | -------------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                                  | Si               |
| + Lapicero 3.20 | 15.70                                  | Si               |
| + Mochila 89.90 | 105.60                                 | Si               |
| Sin Number()    | Error en consola (NaN / toFixed error) | No               |

| Pieza  | Linea de tu codigo donde aparece               | Para que sirve                                                |
| ------ | ---------------------------------------------- | ------------------------------------------------------------- |
| DOM    | `document.querySelector("#carrito")`           | Selecciona elementos del HTML para leer o modificar contenido |
| Evento | `formProducto.addEventListener("submit", ...)` | Escucha y responde al envio del formulario                    |
| Objeto | `new Producto(prodNombre.value, ...)`          | Instancia un objeto con datos y metodos de calculo            |
