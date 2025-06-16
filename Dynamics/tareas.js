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
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = "Limpiar mi cuarto";
    contenedor.appendChild(nuevaTarea);
});

botEstudia = document.getElementById("estudiar");
botEstudia.addEventListener("click", ()=>{
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = "Estudiar para mi examen";
    contenedor.appendChild(nuevaTarea);
});

botMate = document.getElementById("mate");
botMate.addEventListener("click", ()=>{
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = "Tarea de mate";
    contenedor.appendChild(nuevaTarea);
});

botLee = document.getElementById("leer");
botLee.addEventListener("click", ()=>{
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = "Leer 10 páginas de un libro";
    contenedor.appendChild(nuevaTarea);
});

botRepasa = document.getElementById("repasar");
botRepasa.addEventListener("click", ()=>{
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "Tareas");
    nuevaTarea.textContent = "Repasar apuntes";
    contenedor.appendChild(nuevaTarea);
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
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", "../Statics/media/img/amogus.png");
    nuevaTarjeta.setAttribute("alt", "Among us");
    contenedor.appendChild(nuevaTarjeta);
});

botTeorema = document.getElementById("teorema");
botTeorema.addEventListener("click", ()=>{
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", "../Statics/media/img/teorema.jpg");
    nuevaTarjeta.setAttribute("alt", "Teorema de Pitágoras");
    contenedor.appendChild(nuevaTarjeta);
});

botTux = document.getElementById("tux");
botTux.addEventListener("click", ()=>{
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", "../Statics/media/img/tux.png");
    nuevaTarjeta.setAttribute("alt", "Tux");
    contenedor.appendChild(nuevaTarjeta);
});

botCirc = document.getElementById("circ");
botCirc.addEventListener("click", ()=>{
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", "../Statics/media/img/circulo_Cromatico.png");
    nuevaTarjeta.setAttribute("alt", "Círculo Cromático");
    contenedor.appendChild(nuevaTarjeta);
});

botMru = document.getElementById("mru");
botMru.addEventListener("click", ()=>{
    let nuevaTarjeta = document.createElement("img");
    nuevaTarjeta.setAttribute("class", "Tareas");
    nuevaTarjeta.setAttribute("src", "../Statics/media/img/mru.jpg");
    nuevaTarjeta.setAttribute("alt", "Fórmula del Movimiento Rectilíneo Uniforme");
    contenedor.appendChild(nuevaTarjeta);
});