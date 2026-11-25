# Práctica 3.1: Maquetación Responsive con SASS y Vite

## Autor

Fernando Guadalupe Ramos

## Asignatura

Diseño de Interfaces Web (DIW)
2 º DAW

## Descripción

Web responsive de la tienda de decoración **Noma**, maquetada a partir del diseño hecho en Figma. Consta de dos páginas:

- **Landing** (`index.html`): página principal de la tienda.
- **Login** (`login.html`): formulario de acceso.

La web se adapta a escritorio y a móvil. Está hecha con HTML semántico y estilos en SASS, y se compila con Vite.

**Tecnologías:** HTML, SASS (SCSS) y Vite.

**Qué se ha aplicado de SASS:**

- Variables para colores, fuentes y espaciados (`_variables.scss`).
- Mixins reutilizables, como `boton`, `titular` y `etiqueta` (`_mixins.scss`).
- Gestor de media queries con un mapa de breakpoints y el mixin `respond-to`.
- Mapas para generar clases repetidas.
- Anidamiento con la nomenclatura BEM.
- División en parciales importados con `@use` desde `main.scss`.

## Instrucciones de ejecución

Hace falta tener [Node.js](https://nodejs.org) instalado.

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:

   ```
   npm install
   ```

3. Arranca el servidor local:

   ```
   npm run dev
   ```

4. Abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Para generar la versión final (la carpeta `docs/`):

```
npm run build
```

## Enlaces

- **Repositorio en GitHub:** https://github.com/Ferguson66/P3.1-Proyecto-final-responsive-Sass
- **Página desplegada en GitHub Pages:** https://ferguson66.github.io/P3.1-Proyecto-final-responsive-Sass/
- **Prototipo en Figma:** https://www.figma.com/design/nV0YsKxbIH0ua4383FluVn/Noma?t=tZzBBYr430YzZAli-0