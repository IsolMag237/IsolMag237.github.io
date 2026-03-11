const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");

video.onended = function(){
intro.style.display = "none";
contenido.style.display = "block";
};
