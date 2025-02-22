var people = [
    { number: "557715", name: "Samuel Flores", image: "imagen1.jpg" },
    { number: "557710", name: "Samuel Flor", image: "imagen3.jpg" },
    { number: "557720", name: "Samuel Flore", image: "imagen5.jpg" },
    { number: "557730", name: "Samuel Flo", image: "imagen6.jpg" },
    { number: "557735", name: "Samuel Flores", image: "imagen8.jpg" }
];

// Función para generar un número aleatorio dentro de un rango
function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function accionBotonClick() {
    // Verificar si 'people' está vacío
    if (!Array.isArray(people) || people.length === 0) {
        console.error("La lista 'people' está vacía o no está definida.");
        return;
    }

    // Genera un número aleatorio entre 0 y el total de personas - 1
    var randomNumber = generarNumero(0, people.length - 1);
    
    // Muestra el número aleatorio en el elemento con id "randomNumber"
    document.getElementById("randomNumber").innerText = "Número Aleatorio: " + (randomNumber + 1);
    
    // Obtiene la persona correspondiente al número generado
    var selectedPerson = people[randomNumber];

    // Verifica que la persona seleccionada tenga las propiedades necesarias
    if (!selectedPerson || !selectedPerson.name || !selectedPerson.number || !selectedPerson.image) {
        console.error("La persona seleccionada no tiene toda la información necesaria.");
        return;
    }

    // Actualiza el código de Alumno
    document.getElementById("codigoPerson").innerText = selectedPerson.number;
    
    // Verifica si la imagen existe antes de cambiar el src
    var imagePath = "assets/" + selectedPerson.image;
    var imgElement = document.getElementById("personImagen");
    imgElement.src = imagePath;
    
    // Muestra el nombre de la persona
    document.getElementById("personName").innerText = selectedPerson.name;
}

// Agregar un event listener al botón para llamar a la función al hacer click
document.getElementById("btngenerar").addEventListener("click", accionBotonClick);
