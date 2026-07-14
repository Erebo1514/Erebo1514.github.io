/* =====================================================
   CATÁLOGO
   Un ejemplo por cada familia olfativa, tal como pediste.
   Cada producto lleva las notas y los datos que usará
   tanto el buscador por notas como el quiz.
   ===================================================== */
const PRODUCTOS = [
  /**
  {
    id: "acqua-di-gio",
    nombre: "Acqua di Giò",
    familia: "",                                  citricos - amaderados - frescos - afrutados - florales - dulces - aromaticos
    familiaLabel: "Cítricos",                     Cítricos - Amaderados - Frescos - Afrutados - Florales - Dulces - Aromaticos
    genero: "",                                   Masculino - Femenino
    rating: ,                                     0 - 5 ---> float
    precio: ,                                     int
    marca: ,                                      true - false
    imagen: "img/productos/acqua-di-gio.jpg",
    notas: [""],                                  vainilla - madera - citricos - cuero - coco - cafe - tabaco
    temporada: "",                                verano - invierno - todo
    momento: "",                                  dia - noche - ambos
    ocasion: "",                                  oficina - fiesta - ambos - gym
    perfil: ""                                    fresco - dulce
  },
   */


  // --------------- AMADERADOS   ----------
  {
    id: "asad-bourbon",
    nombre: "Asad Bourbon",
    familia: "amaderados",
    familiaLabel: "Amaderados",
    genero: "Masculino",
    rating: 4.5,
    precio: 38,
    marca: false,
    imagen: "img/productos/asad-bourbon.jpg",
    notas: ["vainilla", "madera", "tabaco"],
    temporada: "invierno",
    momento: "noche",
    ocasion: "fiesta",
    perfil: "dulce"
  },

  {
    id: "club-de-nuit-intense-man",
    nombre: "Club de Nuit Intense Man",
    familia: "amaderados",
    familiaLabel: "Amaderados",
    genero: "Masculino",
    rating: 4.7,
    precio: 45,
    marca: false,
    imagen: "img/productos/club-de-nuit-intense-man.jpg",
    notas: ["citricos", "madera", "cuero"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "fresco"
  },



  // --------------- FRESCOS      ----------
  {
    id: "odyssey-bahamas",
    nombre: "Odyssey Bahamas",
    familia: "frescos",
    familiaLabel: "Frescos",
    genero: "Masculino",
    rating: 4.2,
    precio: 35,
    marca: false,
    imagen: "img/productos/odyssey-bahamas.jpg",
    notas: ["citricos", "madera"],
    temporada: "verano",
    momento: "dia",
    ocasion: "gym",
    perfil: "fresco"
  },

  {
    id: "ventana-marine",
    nombre: "Ventana Marine",
    familia: "frescos",
    familiaLabel: "Frescos",
    genero: "Masculino",
    rating: 4.0,
    precio: 28,
    marca: false,
    imagen: "img/productos/ventana-marine.jpg",
    notas: ["citricos", "madera"],
    temporada: "verano",
    momento: "dia",
    ocasion: "gym",
    perfil: "fresco"
  },



  // --------------- AFRUTADOS    ----------
  {
    id: "afeef",
    nombre: "Afeef",
    familia: "afrutados",
    familiaLabel: "Afrutados",
    genero: "Masculino",
    rating: 4.3,
    precio: 40,
    marca: false,
    imagen: "img/productos/afeef.jpg",
    notas: ["vainilla", "citricos"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "dulce"
  },



  // --------------- AROMATICOS   ----------



  // --------------- FLORALES     ----------
  {
    id: "ameerat-al-arab",
    nombre: "El Pack Ameerat Al Arab",
    familia: "florales",
    familiaLabel: "Florales",
    genero: "Femenino",
    rating: 4.4,
    precio: 35,
    marca: false,
    imagen: "img/productos/ameerat-al-arab.jpg",
    notas: ["vainilla", "citricos"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "dulce"
  },



  // --------------- CITRICOS     ----------



  // --------------- DULCES       ----------
  {
    id: "yara-lattafa",
    nombre: "Yara Lattafa",
    familia: "dulces",
    familiaLabel: "Dulces",
    genero: "Femenino",
    rating: 4.6,
    precio: 30,
    marca: false,
    imagen: "img/productos/yara-lattafa.jpg",
    notas: ["vainilla", "coco"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "dulce"
  },

  {
    id: "ana-abiyedh",
    nombre: "Ana Abiyedh",
    familia: "dulces",
    familiaLabel: "Dulces",
    genero: "Femenino",
    rating: 4.4,
    precio: 25,
    marca: false,
    imagen: "img/productos/ana-abiyedh.jpg",
    notas: ["vainilla", "citricos"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "dulce"
  },

  {
    id: "odyssey-mandarin-sky",
    nombre: "Odyssey Mandarin Sky",
    familia: "dulces",
    familiaLabel: "Dulces",
    genero: "Masculino",
    rating: 4.5,
    precio: 38,
    marca: false,
    imagen: "img/productos/odyssey-mandarin-sky.jpg",
    notas: ["vainilla", "citricos", "madera"],
    temporada: "todo",
    momento: "noche",
    ocasion: "fiesta",
    perfil: "dulce"
  },
];

/* =====================================================
   FAMILIAS OLFATIVAS
   Metadatos de cada familia: la imagen de fondo que usará
   su página propia y una descripción corta. Todo lo demás
   (nº de perfumes, precio medio, mejor valorado...) se
   calcula solo a partir de PRODUCTOS, así que si añades o
   quitas perfumes del catálogo, las estadísticas se
   actualizan sin tocar nada más.
   ===================================================== */
const FAMILIAS = {
  citricos: { 
    label: "Cítricos",
    icono: "🍋",
    imagen: "img/portadas/citricos.jpg",
    descripcion: "Notas vivas de bergamota, limón y mandarina. Ideales para empezar el día."
  },
  amaderados: {
    label: "Amaderados",
    icono: "🌲",
    imagen: "img/portadas/amaderados.jpg",
    descripcion: "Sándalo, cedro y vetiver. Carácter cálido para las noches de invierno."
  },
  frescos: {
    label: "Frescos",
    icono: "🌊",
    imagen: "img/portadas/frescos.jpg",
    descripcion: "Acordes acuáticos y limpios. El aroma de la piel recién duchada."
  },
  afrutados: {
    label: "Afrutados",
    icono: "🍓",
    imagen: "img/portadas/afrutados.jpg",
    descripcion: "Coco, mango y frutos rojos. Dulzura jugosa sin empalagar."
  },
  florales: {
    label: "Florales",
    icono: "🌸",
    imagen: "img/portadas/florales.jpg",
    descripcion: "Jazmín, rosa y peonía. El clásico atemporal de la perfumería."
  },
  dulces: {
    label: "Dulces",
    icono: "🍬",
    imagen: "img/portadas/dulces.jpg",
    descripcion: "Vainilla, praliné y caramelo. Envolventes, perfectos de noche."
  },
  aromaticos: {
    label: "Aromáticos",
    icono: "🌿",
    imagen: "img/portadas/aromaticos.jpg",
    descripcion: "Tabaco, café y hierbas. Profundidad especiada con carácter."
  }
};

/* Devuelve estadísticas reales de una familia a partir del catálogo */
function calcularEstadisticasFamilia(familiaId) {
  const productos = PRODUCTOS.filter(p => p.familia === familiaId);
  if (productos.length === 0) return null;

  const precioMedio = productos.reduce((suma, p) => suma + p.precio, 0) / productos.length;
  const mejorValorado = [...productos].sort((a, b) => b.rating - a.rating)[0];

  const contarFrecuencia = (clave) => {
    const conteo = {};
    productos.forEach(p => { conteo[p[clave]] = (conteo[p[clave]] || 0) + 1; });
    return Object.entries(conteo).sort((a, b) => b[1] - a[1])[0][0];
  };

  return {
    total: productos.length,
    precioMedio: precioMedio.toFixed(0),
    mejorValorado,
    temporadaComun: contarFrecuencia("temporada"),
    ocasionComun: contarFrecuencia("ocasion"),
    productos
  };
}

const ETIQUETAS = {
  temporada: { verano: "Verano", invierno: "Invierno", todo: "Todo el año" },
  ocasion: { oficina: "Oficina", fiesta: "Fiesta", ambos: "Cualquier ocasión", gym: "Gimnasio" }
};

/* =====================================================
   RENDER DE TARJETAS DE PRODUCTO
   Reutilizamos la misma función para "Novedades",
   el buscador por notas y el resultado del quiz.
   ===================================================== */
function crearTarjetaProducto(producto) {
  const card = document.createElement("article");
  card.className = "producto-card";
  card.innerHTML = `
    <div class="producto-card__img">
      <img src="${producto.imagen}" alt="Frasco de ${producto.nombre}">
    </div>
    <div class="producto-card__body">
      <span class="producto-card__familia">${producto.familiaLabel}</span>
      <h3 class="producto-card__nombre">${producto.nombre}</h3>
      <span class="producto-card__genero">${producto.genero}</span>
      <span class="producto-card__rating">⭐ ${producto.rating}</span>
      <span class="producto-card__precio">${producto.precio} €</span>
      <button class="producto-card__cta" data-id="${producto.id}">Añadir al carrito</button>
    </div>
  `;
  return card;
}

function pintarNovedades() {
  const grid = document.getElementById("productos-grid");
  if (!grid) return;

  // Solo 4 perfumes en "Novedades" (uno por familia hasta llegar a 4).
  // Si quieres cambiar cuántos se muestran, ajusta este número.
  const LIMITE_NOVEDADES = 4;

  const unoPorFamilia = Object.keys(FAMILIAS)
    .map(familiaId => PRODUCTOS.find(p => p.familia === familiaId))
    .filter(Boolean)
    .slice(0, LIMITE_NOVEDADES);

  grid.innerHTML = "";
  unoPorFamilia.forEach(p => grid.appendChild(crearTarjetaProducto(p)));
}

/* =====================================================
   MÁS VENDIDOS (home)
   No tenemos un contador de ventas real todavía, así que
   usamos el rating como aproximación: cuanto mejor valorado,
   más arriba. El día que haya un backend con ventas reales,
   solo hay que cambiar el .sort() de aquí.
   ===================================================== */
function pintarMasVendidos() {
  const grid = document.getElementById("mas-vendidos-grid");
  if (!grid) return;

  const masVendidos = [...PRODUCTOS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);   // Numero de vendidos que sale

  grid.innerHTML = "";
  masVendidos.forEach(p => grid.appendChild(crearTarjetaProducto(p)));
}

/* =====================================================
   PÁGINA "FAMILIAS" (familias.html)
   Listado de las 7 familias, cada una enlaza a su propia
   página familia.html?familia=XXX
   ===================================================== */
function pintarListadoFamilias() {
  const grid = document.getElementById("familias-listado-grid");
  if (!grid) return;

  grid.innerHTML = "";
  Object.entries(FAMILIAS).forEach(([id, familia]) => {
    const link = document.createElement("a");
    link.href = `familia.html?familia=${id}`;
    link.className = "familia-card";
    link.innerHTML = `
      <span class="familia-card__icon">${familia.icono}</span>
      <span class="familia-card__nombre">${familia.label}</span>
    `;
    grid.appendChild(link);
  });
}

/* =====================================================
   PÁGINA INDIVIDUAL DE FAMILIA (familia.html)
   Lee el parámetro ?familia= de la URL, pinta el hero a
   pantalla completa con foto + estadísticas, y debajo el
   grid de productos de esa familia.
   ===================================================== */
function inicializarPaginaFamilia() {
  const heroSection = document.getElementById("familia-hero");
  if (!heroSection) return;

  const parametros = new URLSearchParams(window.location.search);
  const familiaId = parametros.get("familia");
  const familia = FAMILIAS[familiaId];
  const stats = calcularEstadisticasFamilia(familiaId);

  if (!familia || !stats) {
    heroSection.innerHTML = `
      <div class="familia-hero__stats">
        <p class="section-sub">No encontramos esa familia olfativa.</p>
        <a href="familias.html" class="btn btn--primary">Ver todas las familias</a>
      </div>
    `;
    return;
  }

  document.title = `${familia.label} — Aroma`;

  heroSection.querySelector(".familia-hero__foto").style.backgroundImage = `url('${familia.imagen}')`;
  heroSection.querySelector(".familia-hero__titulo").textContent = familia.label;

  heroSection.querySelector(".familia-hero__stats").innerHTML = `
    <p class="eyebrow">Familia olfativa</p>
    <h1 class="familia-hero__nombre">${familia.label}</h1>
    <p class="familia-hero__descripcion">${familia.descripcion}</p>

    <div class="familia-hero__grid-stats">
      <div class="stat">
        <span class="stat__valor">${stats.total}</span>
        <span class="stat__label">Perfumes disponibles</span>
      </div>
      <div class="stat">
        <span class="stat__valor">${stats.precioMedio} €</span>
        <span class="stat__label">Precio medio</span>
      </div>
      <div class="stat">
        <span class="stat__valor">⭐ ${stats.mejorValorado.rating}</span>
        <span class="stat__label">${stats.mejorValorado.nombre}</span>
      </div>
      <div class="stat">
        <span class="stat__valor">${ETIQUETAS.temporada[stats.temporadaComun]}</span>
        <span class="stat__label">Temporada ideal</span>
      </div>
    </div>

    <a href="familias.html" class="familia-hero__volver">← Ver todas las familias</a>
  `;

  const productosGrid = document.getElementById("familia-productos-grid");
  productosGrid.innerHTML = "";
  stats.productos.forEach(p => productosGrid.appendChild(crearTarjetaProducto(p)));
}

/* =====================================================
   CARRITO (muy simple, solo para practicar eventos)
   ===================================================== */
function inicializarCarrito() {
  let total = 0;
  const contador = document.querySelector(".cart-count");

  document.body.addEventListener("click", (e) => {
    if (e.target.matches(".producto-card__cta")) {
      total++;
      contador.textContent = total;
    }
  });
}

/* =====================================================
   BUSCADOR POR NOTAS
   ===================================================== */
function inicializarBuscadorNotas() {
  const form = document.getElementById("notas-form");
  const resultado = document.getElementById("notas-resultado");
  const botonLimpiar = document.getElementById("notas-reset");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const notasSeleccionadas = [...form.querySelectorAll("input[name='nota']:checked")]
      .map(input => input.value);

    resultado.innerHTML = "";

    if (notasSeleccionadas.length === 0) {
      resultado.innerHTML = `<p class="notas__vacio">Selecciona al menos una nota para buscar.</p>`;
      return;
    }

    const coincidencias = PRODUCTOS.filter(producto =>
      producto.notas.some(nota => notasSeleccionadas.includes(nota))
    );

    if (coincidencias.length === 0) {
      resultado.innerHTML = `<p class="notas__vacio">No encontramos colonias con esas notas todavía.</p>`;
      return;
    }

    coincidencias.forEach(p => resultado.appendChild(crearTarjetaProducto(p)));
  });

  botonLimpiar.addEventListener("click", () => {
    form.reset();
    resultado.innerHTML = "";
  });
}

/* =====================================================
   QUIZ "¿QUÉ PERFUME ELIJO?"
   Cada pregunta suma puntos a los productos que
   coinciden con la respuesta elegida.
   ===================================================== */
const PREGUNTAS_QUIZ = [
  {
    texto: "¿Para qué estación lo quieres?",
    opciones: [
      { texto: "Verano", clave: "temporada", valor: "verano" },
      { texto: "Invierno", clave: "temporada", valor: "invierno" },
      { texto: "Todo el año", clave: "temporada", valor: "todo" }
    ]
  },
  {
    texto: "¿Día o noche?",
    opciones: [
      { texto: "Día", clave: "momento", valor: "dia" },
      { texto: "Noche", clave: "momento", valor: "noche" },
      { texto: "Ambos", clave: "momento", valor: "ambos" }
    ]
  },
  {
    texto: "¿Oficina o fiesta?",
    opciones: [
      { texto: "Oficina", clave: "ocasion", valor: "oficina" },
      { texto: "Fiesta", clave: "ocasion", valor: "fiesta" },
      { texto: "Ambas", clave: "ocasion", valor: "ambos" },
      { texto: "Gimnacio", clave: "ocasion", valor: "gym" }
    ]
  },
  {
    texto: "¿Prefieres dulce o fresco?",
    opciones: [
      { texto: "Dulce", clave: "perfil", valor: "dulce" },
      { texto: "Fresco", clave: "perfil", valor: "fresco" }
    ]
  },
  {
    texto: "¿Qué presupuesto tienes?",
    opciones: [
      { texto: "Hasta 50€", clave: "precio", valor: 50 },
      { texto: "Hasta 90€", clave: "precio", valor: 90 },
      { texto: "Sin límite", clave: "precio", valor: 9999 }
    ]
  }
];

function inicializarQuiz() {
  const intro = document.getElementById("quiz-intro");
  const box = document.getElementById("quiz-box");
  const botonEmpezar = document.getElementById("quiz-start");
  const contenedorPregunta = document.getElementById("quiz-pregunta");
  const barraProgreso = document.getElementById("quiz-progress-bar");
  const resultadoBox = document.getElementById("quiz-resultado");

  let indiceActual = 0;
  const respuestas = [];

  botonEmpezar.addEventListener("click", () => {
    indiceActual = 0;
    respuestas.length = 0;
    intro.hidden = true;
    resultadoBox.hidden = true;
    box.hidden = false;
    pintarPregunta();
  });

  function pintarPregunta() {
    const pregunta = PREGUNTAS_QUIZ[indiceActual];
    barraProgreso.style.width = `${(indiceActual / PREGUNTAS_QUIZ.length) * 100}%`;

    contenedorPregunta.innerHTML = `
      <p class="quiz__pregunta-titulo">${pregunta.texto}</p>
      <div class="quiz__opciones">
        ${pregunta.opciones.map(op => `
          <div class="quiz__opcion" data-clave="${op.clave}" data-valor="${op.valor}">
            ${op.texto}
          </div>
        `).join("")}
      </div>
    `;

    contenedorPregunta.querySelectorAll(".quiz__opcion").forEach(opcionEl => {
      opcionEl.addEventListener("click", () => {
        respuestas.push({
          clave: opcionEl.dataset.clave,
          valor: opcionEl.dataset.clave === "precio" ? Number(opcionEl.dataset.valor) : opcionEl.dataset.valor
        });

        indiceActual++;
        if (indiceActual < PREGUNTAS_QUIZ.length) {
          pintarPregunta();
        } else {
          mostrarResultadoQuiz();
        }
      });
    });
  }

  function mostrarResultadoQuiz() {
    box.hidden = true;
    barraProgreso.style.width = "100%";

    const puntuados = PRODUCTOS.map(producto => {
      let puntos = 0;
      respuestas.forEach(r => {
        if (r.clave === "precio") {
          if (producto.precio <= r.valor) puntos++;
        } else if (producto[r.clave] === r.valor || producto[r.clave] === "todo" || producto[r.clave] === "ambos") {
          puntos++;
        }
      });
      return { producto, puntos };
    });

    const recomendados = puntuados
      .sort((a, b) => b.puntos - a.puntos)
      .slice(0, 3)
      .map(p => p.producto);

    resultadoBox.hidden = false;
    resultadoBox.innerHTML = `
      <h3>Estos son tus perfumes ✦</h3>
      <div class="quiz__resultado-grid" id="quiz-resultado-grid"></div>
      <button class="btn btn--ghost quiz__reiniciar" id="quiz-reiniciar">Volver a hacer el test</button>
    `;

    const grid = document.getElementById("quiz-resultado-grid");
    recomendados.forEach(p => grid.appendChild(crearTarjetaProducto(p)));

    document.getElementById("quiz-reiniciar").addEventListener("click", () => {
      resultadoBox.hidden = true;
      intro.hidden = false;
    });
  }
}

/* =====================================================
   CAJA DE SUGERENCIAS: "PIDE LA COLONIA QUE QUIERAS VER"
   -----------------------------------------------------
   AVISO IMPORTANTE SOBRE GITHUB PAGES:
   GitHub Pages solo sirve archivos estáticos (HTML/CSS/JS), no tiene
   servidor propio ni base de datos. Eso significa que esta página, tal
   cual, NO PUEDE escribir de verdad un archivo Usuarios.txt en el
   servidor cada vez que alguien manda el formulario.

   Lo que SÍ hacemos aquí, de forma honesta y funcional:
     1) Cada envío se guarda en localStorage (clave "aroma_eleccion_users"),
        que es memoria persistente del NAVEGADOR del propio usuario.
     2) El botón "Descargar registro" genera un Usuarios.txt real con
        todo lo que ese navegador ha guardado, listo para subir a la
        carpeta /Eleccion_users del proyecto a mano si quieres.

   Si en el futuro quieres que los envíos de TODOS los visitantes lleguen
   a un único sitio (esto es, un Usuarios.txt compartido de verdad),
   necesitas un pequeño backend o un servicio externo gratuito. Ejemplo
   con Formspree (solo tendrías que crear una cuenta gratuita y pegar tu
   propia URL de formulario):

     // fetch("https://formspree.io/f/TU_ID_DE_FORMULARIO", {
     //   method: "POST",
     //   headers: { "Content-Type": "application/json" },
     //   body: JSON.stringify({ colonia, email })
     // });

   ===================================================== */
const CLAVE_ELECCION_USUARIOS = "aroma_eleccion_users";

function leerEleccionesGuardadas() {
  try {
    const crudo = localStorage.getItem(CLAVE_ELECCION_USUARIOS);
    return crudo ? JSON.parse(crudo) : [];
  } catch {
    return [];
  }
}

function guardarEleccionUsuario(colonia, email) {
  const elecciones = leerEleccionesGuardadas();
  elecciones.push({
    colonia,
    email,
    fecha: new Date().toISOString()
  });
  localStorage.setItem(CLAVE_ELECCION_USUARIOS, JSON.stringify(elecciones));

  // Para conectar esto a un backend real, este es el sitio donde
  // añadirías la llamada fetch() comentada en el aviso de arriba.
}

function descargarUsuariosTxt() {
  const elecciones = leerEleccionesGuardadas();

  if (elecciones.length === 0) {
    alert("Todavía no hay ninguna sugerencia guardada en este navegador.");
    return;
  }

  const contenido = elecciones
    .map(e => `${e.fecha} | ${e.email} | ${e.colonia}`)
    .join("\n");

  const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "Usuarios.txt"; // pensado para guardarse dentro de /Eleccion_users
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}

function inicializarEleccionUsuarios() {
  const form = document.getElementById("eleccion-form");
  if (!form) return;

  const mensaje = document.getElementById("eleccion-mensaje");
  const botonDescargar = document.getElementById("eleccion-descargar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const colonia = document.getElementById("eleccion-nombre").value.trim();
    const email = document.getElementById("eleccion-email").value.trim();

    if (!colonia || !email) {
      mensaje.textContent = "Rellena el nombre de la colonia y tu Gmail.";
      return;
    }

    guardarEleccionUsuario(colonia, email);
    mensaje.textContent = `¡Gracias! Hemos guardado tu sugerencia de "${colonia}".`;
    form.reset();
  });

  botonDescargar.addEventListener("click", descargarUsuariosTxt);
}

/* =====================================================
   ARRANQUE
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  pintarNovedades();
  pintarMasVendidos();
  pintarListadoFamilias();
  inicializarPaginaFamilia();
  inicializarCarrito();
  inicializarBuscadorNotas();
  inicializarQuiz();
  inicializarEleccionUsuarios();
});
