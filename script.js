// Mensaje cuando carga la página
console.log("Página cargada correctamente");

// Ejemplo de interacción
document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", function(){
        alert("¡Hiciste clic en el título!");
    });
});
