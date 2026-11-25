// Punto de entrada: Vite compila el SCSS automáticamente
import "./styles/main.scss";

// Botón "Volver arriba" del footer con desplazamiento suave
document.querySelectorAll("[data-subir]").forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    evento.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
