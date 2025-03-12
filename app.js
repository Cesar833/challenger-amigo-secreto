// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 

    if (!inputAmigo) {  
        console.error("No se encontró el elemento con ID 'amigo'");
        return;
    }

    let nombreAmigo = inputAmigo.value.trim(); 

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre válido.");
        return; 
    }

    console.log(`Amigo añadido: ${nombreAmigo}`);

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) { 
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en el HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos'); // Asegúrate de que este elemento exista en el HTML

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; 

    // Recorrer el array con un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    // Genera un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
