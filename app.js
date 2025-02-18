// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Declarar variables 
let ListaNombres = [];



//funcion agregar amigos a la lista 
function agregarAmigo()
{
    // Obtener valor desde la caja de texto.
const nombre = document.getElementById('amigo').value;
    // Verificar que no esté vacío
if (nombre.trim() !== "") {
    // Agregar el valor al array
    ListaNombres.push(nombre);
    // Mostrar el array actualizado en la lista
    //console.log(ListaNombres);
} else {
    alert("Por favor, ingresa un texto.");
}

// Limpiar el input
document.getElementById('amigo').value = "";
mostrarLista();
}

function mostrarLista() {
    //Obtener lista de html
    const lista = document.getElementById("listaAmigos");
    // Vaciar Lista
    lista.innerHTML = '';
    // Recorrer el array y crear un <li> por cada nombre
 ListaNombres.forEach(nombre => {
    const li = document.createElement("li"); // Crear un nuevo elemento <li>
    li.textContent = nombre; // Asignar el nombre al contenido del <li>
    lista.appendChild(li); // Agregar el <li> a la lista
});
}

function sortearAmigo(){
    // Obtener espacio para resultado en html
    const resultado = document.getElementById("resultado");
    // Obtener tamaño de array
    let cantidadAmigos = ListaNombres.length;
    // Obtener Numero al azar
    let numeroAzar = parseInt(Math.random() * cantidadAmigos);
    // Asignar Resultado
    resultado.textContent = ListaNombres[numeroAzar];


}




