# Para ti ♡
Experiencia romántica en React, Vite, Tailwind CSS, Motion y Lucide. Ocho capítulos interactivos, corazón de palabras, carta, galería, regalo, abrazo y música instrumental original generada en el navegador. Sin base de datos.

## Desarrollo
Requiere Node 22. Ejecuta `npm ci` y `npm run dev`. El botón «Personalizar» solo existe en desarrollo. Guarda vistas previas en tu navegador y permite descargar `contenido.js`: reemplaza con él `src/data/contenido.js` antes de publicar. El editor no se incluye como control accesible en producción. Los textos originales son ejemplos para reemplazar.

## Personalizar
Edita `src/data/contenido.js`. Coloca imágenes en `public/photos/` y música propia o autorizada en `public/audio/`. Usa rutas como `/photos/foto.jpg` y `/audio/musica.mp3`. Las rutas se adaptan al repositorio. Sin fotos se muestran espacios de ejemplo. La música actual es «A Dónde Vamos» de Morat mediante el reproductor oficial de Spotify: pulsa «Nuestra canción» y después reproducir. El reproductor permanece montado entre capítulos y al ocultarlo; Spotify determina la reproducción disponible según cuenta y región. Puedes cambiar `spotifyTrackId` y `titulo`. Para usar un archivo propio o la melodía instrumental generada, deja `spotifyTrackId` vacío y configura `src` si corresponde. Para una carta larga conserva `\n\n` entre párrafos. No incluyas información privada que no quieras publicar: GitHub Pages es público.

## Publicar en un repositorio nuevo de GitHub
1. Crea un repositorio vacío y sube **el contenido de esta carpeta** a su rama `main` (package.json y .github deben estar en la raíz).
2. En el repositorio ve a **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. En **Actions** ejecuta «Publicar en GitHub Pages», o realiza un push a `main`.
4. El enlace aparecerá en el despliegue y en Settings → Pages: `https://USUARIO.github.io/NOMBRE-REPO/`.

El workflow configura automáticamente la ruta base usando el nombre del repositorio. Para un dominio propio o un repositorio `USUARIO.github.io`, cambia el argumento `--base` del workflow a `/`.

## Comprobar producción
`npm run build -- --base=/nombre-repo/`
`npm run preview -- --base=/nombre-repo/`
Abre la ruta `/nombre-repo/` que corresponda al build. Navega los ocho capítulos; prueba mensajes, corazón e idiomas, estrellas, carta, fotos y Escape, regalo, abrazo y música. Activa movimiento reducido en el sistema para comprobar accesibilidad. La música requiere un toque y se conserva entre capítulos.
