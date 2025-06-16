function nuevaTarea(texto){
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = texto;
    nuevaTarea.addEventListener("click", () => {
        contenedor.prepend(nuevaTarea);
    });
    nuevaTarea.addEventListener("mouseout", () => {
        nuevaTarea.textContent = texto;
    });
    nuevaTarea.addEventListener("mouseover", () => {
        nuevaTarea.textContent = "Click para mover la tarea al inicio de la lista";
    });
    contenedor.appendChild(nuevaTarea); 
}
function nuevaTarjeta(ruta, alt){
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", ruta);
    nuevaTarjeta.setAttribute("alt", alt);
    nuevaTarjeta.addEventListener("click", () => {
        contenedor.prepend(nuevaTarjeta);
    });
    contenedor.appendChild(nuevaTarjeta);
}

botAgrega = document.getElementById("agregar");
listaTareas = document.getElementById("listaTareas");
botAgrega.addEventListener("click", ()=>{
    let oculto = listaTareas.style.display === "none";
    listaTareas.style.display=oculto? "flex":"none";
    botAgrega.textContent=oculto? "Ocultar Menú":"Mostrar Menú de Tareas"
    
    if(oculto){
        listaTarjetas.style.display = "none";
        botTarjeta.textContent = "Mostrar Menú de Tarjetas";
    }
});

botLimpia = document.getElementById("limpiar");
botLimpia.addEventListener("click", ()=>{
    nuevaTarea("Limpiar mi cuarto");
});

botEstudia = document.getElementById("estudiar");
botEstudia.addEventListener("click", ()=>{
    nuevaTarea("Estudiar para mi examen");
});

botMate = document.getElementById("mate");
botMate.addEventListener("click", ()=>{
    nuevaTarea("Tarea de mate");
});

botLee = document.getElementById("leer");
botLee.addEventListener("click", ()=>{
    nuevaTarea("Leer 10 páginas de un libro");
});

botRepasa = document.getElementById("repasar");
botRepasa.addEventListener("click", ()=>{
    nuevaTarea("Repasar apuntes");
});

botQuita = document.getElementById("quitar");
botQuita.addEventListener("click", () => {
    let tareas = contenedor.getElementsByClassName("Tareas");
    if (tareas.length > 0) {
        contenedor.removeChild(tareas[tareas.length - 1]);
    }
    else{
        console.log("No hay tareas para eliminar.");
    }
});

botVacia = document.getElementById("vaciar");
botVacia.addEventListener("click", () => {
    let tareas = contenedor.getElementsByClassName("Tareas");
    if (tareas.length > 0) {
        while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
        }
    }
    else{
        console.log("La lista está vacía.");
    }
});

botTarjeta = document.getElementById("tarjeta");
listaTarjetas = document.getElementById("listaTarjetas");
botTarjeta.addEventListener("click", ()=>{
    let oculto = listaTarjetas.style.display === "none";
    listaTarjetas.style.display=oculto? "flex":"none";
    botTarjeta.textContent=oculto? "Ocultar Menú":"Mostrar Menú de Tarjetas";

    if(oculto){
        listaTareas.style.display = "none";
        botAgrega.textContent = "Mostrar Menú de Tareas";
    }
});

botAmogus = document.getElementById("amogus");
botAmogus.addEventListener("click", ()=>{
    nuevaTarjeta("../Statics/media/img/amogus.png", "Among Us");
});

botTeorema = document.getElementById("teorema");
botTeorema.addEventListener("click", ()=>{
    nuevaTarjeta("../Statics/media/img/teorema.jpg", "Teorema de Pitágoras");
});

botTux = document.getElementById("tux");
botTux.addEventListener("click", ()=>{
    nuevaTarjeta("../Statics/media/img/tux.png", "Tux");
});

botCirc = document.getElementById("circ");
botCirc.addEventListener("click", ()=>{
    nuevaTarjeta("../Statics/media/img/circulo_Cromatico.png", "Círculo Cromático");
});

botMru = document.getElementById("mru");
botMru.addEventListener("click", ()=>{
    nuevaTarjeta("../Statics/media/img/mru.jpg", "Fórmula del Movimiento Rectilíneo Uniforme");
});