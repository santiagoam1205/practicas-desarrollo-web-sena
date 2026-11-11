let tareas = [];

let tareaInput = document.getElementById("tareaInput");
let tareaForm = document.getElementById("tareaForm");
let listaTareas = document.getElementById("listaTareas");

function agregarTarea() {

    let texto= tareaInput.value;

    if (texto === ""){
        alert("Debes escribir una tarea");

    }else{

        let nuevaTarea = {
            nombre: texto,
            completada: false
        };

        tareas.push(nuevaTarea);
        tareaInput.value = "";
        console.log (tareas);

    }
}

function completarTarea(indice) {

    tareas[indice].completada = true;

    mostrarTareas();

}

function eliminarTarea(indice) {

    tareas.splice(indice, 1);

    mostrarTareas();

}

function actualizarContadores() {

    let total = tareas.length;

    let completadas = 0;
    let pendientes = 0;

    for (let i = 0; i < tareas.length; i++) {

        if (tareas[i].completada === true) {

            completadas++;

        } else {

            pendientes++;

        }

    }

    document.getElementById("totalTareas").textContent = total;

    document.getElementById("tareasCompletadas").textContent = completadas;

    document.getElementById("tareasPendientes").textContent = pendientes;

}

function mostrarTareas() {

    listaTareas.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {

        let elemento = document.createElement("li");

        let texto = document.createElement("span");

        texto.textContent = tareas[i].nombre;

        elemento.appendChild(texto);

        if (tareas[i].completada === true) {

            elemento.classList.add("completada");

            texto.style.textDecoration = "line-through";

        } else {

            let botonCompletar = document.createElement("button");

            botonCompletar.textContent = "Completar";

            botonCompletar.type = "button";

            botonCompletar.addEventListener("click", function() {

                completarTarea(i);

            });

            elemento.appendChild(botonCompletar);

        }

        let botonEliminar = document.createElement("button");

         botonEliminar.textContent = "Eliminar";

         botonEliminar.type = "button";

         botonEliminar.addEventListener("click", function() {

          eliminarTarea(i);

        });

        elemento.appendChild(botonEliminar);

        listaTareas.appendChild(elemento);

    }

        actualizarContadores();

}

tareaForm.addEventListener("submit", function(event) {

    event.preventDefault();

    agregarTarea();

    mostrarTareas();

});