# Aroma — sitio estático (GitHub Pages)

## Estructura de carpetas
```
index.html
familias.html
familia.html
funcion.js
style.css
img/
  logo/       -> logo de la empresa (img/logo/logo.png)
  portadas/   -> foto de portada de cada familia olfativa (usada en familia.html)
  productos/  -> foto de cada perfume individual
  hero/       -> imagen grande de portada de la home
Eleccion_users/
  README.md   -> explica cómo funciona el registro de sugerencias
```

## Qué se ha cambiado respecto a la versión anterior
- Header: se han quitado (comentado, no borrado) los botones de buscar,
  carrito y cuenta en las 3 páginas. Están listos para reactivarse cuando
  se implemente login/carrito de verdad — solo hay que quitar el `<!-- -->`.
- Novedades: ahora muestra solo 4 perfumes (antes 7). Se controla con la
  constante `LIMITE_NOVEDADES` en funcion.js.
- Colonias (familias.html / familia.html): igual que antes, portada +
  estadísticas por familia, sin cambios de fondo.
- Sección nueva "Pide la colonia que quieras ver", justo después del quiz,
  donde el usuario escribe el nombre de una colonia + su Gmail.
- Sección nueva "Cómo comprar": métodos de pago (Bizum / efectivo, entrega
  a domicilio) + redes sociales.
- style.css: hoja de estilos completa nueva (antes no existía en los
  archivos que me pasaste), con diseño propio y adaptado a móvil/escritorio.

## Aviso importante: por qué Usuarios.txt no se escribe solo
GitHub Pages solo sirve archivos estáticos: no hay servidor, ni base de
datos, ni forma de que el navegador escriba un archivo dentro de tu
repositorio automáticamente. Por eso el formulario de sugerencias:

1. Guarda cada envío en el `localStorage` del navegador de quien lo rellena.
2. Ofrece un botón "Descargar registro" que genera un `Usuarios.txt` de
   verdad, listo para meter a mano en `/Eleccion_users`.

Si quieres que los envíos de **todos** los visitantes lleguen a un único
sitio compartido, necesitas conectar el formulario a un servicio externo
gratuito (Formspree, Google Forms + Sheets, Airtable) o montar un pequeño
backend aparte. Hay un ejemplo comentado en `funcion.js`, dentro de
`guardarEleccionUsuario()`.

## Cómo publicarlo en GitHub Pages
1. Sube todos estos archivos a la raíz de tu repositorio (o a `/docs` si
   así lo configuras).
2. En el repositorio: Settings → Pages → Source → selecciona la rama y
   carpeta donde están estos archivos.
3. Añade tus fotos reales en `img/logo`, `img/portadas`, `img/productos`
   e `img/hero` respetando los nombres de archivo que ya usa `funcion.js`
   (por ejemplo `img/productos/sauvage.jpg`).
