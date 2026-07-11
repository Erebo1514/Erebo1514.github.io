/* =====================================================
   CATÁLOGO
   Un ejemplo por cada familia olfativa, tal como pediste.
   Cada producto lleva las notas y los datos que usará
   tanto el buscador por notas como el quiz.
   ===================================================== */
const PRODUCTOS = [
  {
    id: "acqua-di-gio",
    nombre: "Acqua di Giò",
    familia: "citricos",
    familiaLabel: "Cítricos",
    genero: "Masculino",
    rating: 4.7,
    precio: 68,
    imagen: "img/productos/acqua-di-gio.jpg",
    notas: ["citricos"],
    temporada: "verano",
    momento: "dia",
    ocasion: "oficina",
    perfil: "fresco"
  },
  {
    id: "bleu-de-chanel",
    nombre: "Bleu de Chanel",
    familia: "amaderados",
    familiaLabel: "Amaderado",
    genero: "Masculino",
    rating: 4.9,
    precio: 89,
    imagen: "img/productos/bleu-de-chanel.jpg",
    notas: ["madera", "cuero"],
    temporada: "invierno",
    momento: "noche",
    ocasion: "fiesta",
    perfil: "fresco"
  },
  {
    id: "sauvage",
    nombre: "Sauvage",
    familia: "frescos",
    familiaLabel: "Fresco",
    genero: "Masculino",
    rating: 4.8,
    precio: 89,
    imagen: "img/productos/sauvage.jpg",
    notas: ["citricos", "madera"],
    temporada: "todo",
    momento: "ambos",
    ocasion: "ambos",
    perfil: "fresco"
  },
  {
    id: "si-passione",
    nombre: "Sì Passione",
    familia: "afrutados",
    familiaLabel: "Afrutado",
    genero: "Femenino",
    rating: 4.6,
    precio: 74,
    imagen: "img/productos/si-passione.jpg",
    notas: ["coco"],
    temporada: "verano",
    momento: "dia",
    ocasion: "fiesta",
    perfil: "dulce"
  },
  {
    id: "chanel-n5",
    nombre: "Chanel N°5",
    familia: "florales",
    familiaLabel: "Floral",
    genero: "Femenino",
    rating: 4.9,
    precio: 98,
    imagen: "img/productos/chanel-n5.jpg",
    notas: ["madera", "vainilla"],
    temporada: "todo",
    momento: "noche",
    ocasion: "fiesta",
    perfil: "dulce"
  },
  {
    id: "la-vie-est-belle",
    nombre: "La Vie Est Belle",
    familia: "dulces",
    familiaLabel: "Dulce",
    genero: "Femenino",
    rating: 4.8,
    precio: 82,
    imagen: "img/productos/la-vie-est-belle.jpg",
    notas: ["vainilla", "cafe"],
    temporada: "invierno",
    momento: "noche",
    ocasion: "ambos",
    perfil: "dulce"
  },
  {
    id: "hawas",
    nombre: "Hawas",
    familia: "aromaticos",
    familiaLabel: "Aromático",
    genero: "Masculino",
    rating: 4.5,
    precio: 42,
    imagen: "img/productos/hawas.jpg",
    notas: ["tabaco", "cafe"],
    temporada: "invierno",
    momento: "ambos",
    ocasion: "oficina",
    perfil: "fresco"
  }
];

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
  grid.innerHTML = "";
  PRODUCTOS.forEach(p => grid.appendChild(crearTarjetaProducto(p)));
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
      { texto: "Ambas", clave: "ocasion", valor: "ambos" }
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
   ARRANQUE
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  pintarNovedades();
  inicializarCarrito();
  inicializarBuscadorNotas();
  inicializarQuiz();
});
