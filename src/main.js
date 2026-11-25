//Compilacion automatica
import "./styles/main.scss";

// Botom de subir al inicio
document.querySelectorAll("[data-subir]").forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    evento.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
