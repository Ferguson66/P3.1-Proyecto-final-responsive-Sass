import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const ruta = (archivo) => fileURLToPath(new URL(archivo, import.meta.url));

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: ruta("src/index.html"),
        login: ruta("src/login.html"),
      },
    },
  },
});
