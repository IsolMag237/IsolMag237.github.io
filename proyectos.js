const proyectos = document.querySelectorAll(".proyecto");

proyectos.forEach(proyecto => {

proyecto.addEventListener("click", () => {

proyectos.forEach(p => p.classList.remove("activo"));

proyecto.classList.add("activo");

});

});
