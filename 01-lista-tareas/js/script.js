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