// Obtener referencias a los elementos del DOM
const headerTitle = document.querySelector(".single-page-header .title");
const yearSelector = document.getElementById("YearSelector");
const newsContainer = document.querySelector(".news-articles-list");
const cargarMasBtn = document.getElementById("cargarMasBtn");

// Variables para el control de noticias cargadas
let totalNoticias = 0;
let noticiasCargadas = 0;
let noticiasPorCarga = 8;

// Añade una variable de control
let cargaHabilitada = true;

// Función para actualizar el contenido según la selección y mostrar solo 8 noticias
async function updateContent(selectedYear, limpiarContenido = true) {
  const newsTitle = document.querySelector(".news-title");

  // Cargar noticias de noticias.html, noticias2.html y noticias3.html
  const [noticiasHtml, noticias2Html, noticias3Html] = await Promise.all([
    fetch("noticias.html").then((response) => response.text()),
    fetch("noticias2.html").then((response) => response.text()),
    fetch("noticias3.html").then((response) => response.text()),
  ]);

  // Combinar el contenido HTML de todas las páginas de noticias
  const combinedHtml = noticiasHtml + noticias2Html + noticias3Html;

  // Crear un elemento temporal para almacenar el contenido combinado y manipularlo
  const tempElement = document.createElement("div");
  tempElement.innerHTML = combinedHtml;

  // Filtrar noticias basadas en el año seleccionado
  const filteredNews = Array.from(
    tempElement.querySelectorAll(".news-item")
  ).filter((article) => {
    const articleDate = new Date(
      article.querySelector("time").getAttribute("datetime")
    );
    const articleYear = articleDate.getFullYear().toString();

    return selectedYear === "all" || selectedYear === articleYear;
  });

  // Calcular el número total de noticias
  totalNoticias = filteredNews.length;
  // Imprimir por consola el número total de noticias
  console.log("Total de noticias:", totalNoticias);

  // Limpiar el contenido solo si se indica
  if (limpiarContenido) {
    newsContainer.innerHTML = "";
  }

  // Determinar cuántas noticias mostrar en esta carga
  const noticiasAMostrar = noticiasCargadas + noticiasPorCarga;
  // Imprimir por consola el número de noticias a mostrar en esta carga
  console.log("Noticias a mostrar:", noticiasAMostrar);

  // Agregar las noticias filtradas al contenedor
  for (
    let i = noticiasCargadas;
    i < noticiasAMostrar && i < totalNoticias;
    i++
  ) {
    const articleContainer = document.createElement("li");
    articleContainer.classList.add("news-item");
    articleContainer.innerHTML = filteredNews[i].innerHTML;
    newsContainer.appendChild(articleContainer);
  }

  // Actualizar el contador de noticias cargadas
  noticiasCargadas = noticiasAMostrar;

  // Ocultar el botón "Cargar más" si no hay más noticias por cargar
  if (noticiasAMostrar >= totalNoticias) {
    cargarMasBtn.style.display = "none";
    console.log("noticiasAMostrar >= totalNoticias");
  } else {
    cargarMasBtn.style.display = "block";
    console.log("noticiasAMostrar <= totalNoticias");
  }

  // Obtener la URL actual
  var currentUrl = window.location.href;

  // Verificar si la URL contiene "noticiasIngles.html"
  if (currentUrl.includes("noticiasIngles.html")) {
    // Estamos en la página en inglés
    newsTitle.textContent = "All News";
    if (selectedYear === "all") {
      newsTitle.textContent = "All News";
    } else {
      newsTitle.textContent = `News ${selectedYear}`;
    }
  } else {
    // Estamos en la página en español
    if (selectedYear === "all") {
      newsTitle.textContent = "Todas las noticias";
    } else {
      newsTitle.textContent = `Noticias ${selectedYear}`;
    }
  }
}

// Evento para el botón "Cargar más"
cargarMasBtn.addEventListener("click", cargarMasNoticias);

// Función para cargar más noticias
function cargarMasNoticias() {
  if (cargaHabilitada) {
    // Deshabilita la carga para evitar ejecuciones múltiples
    cargaHabilitada = false;

    // Actualiza el contenido con las noticias cargadas hasta el momento
    updateContent(yearSelector.value, false); // El segundo parámetro indica que no se limpie el contenido

    // Vuelve a habilitar la carga después de un tiempo (puedes ajustar el tiempo según tus necesidades)
    setTimeout(function () {
      cargaHabilitada = true;
    }, 1000); // Por ejemplo, habilita la carga después de 1000 milisegundos (1 segundo)
  }
}

// Evento cuando se cambia la selección en la lista desplegable
yearSelector.addEventListener("change", async function (event) {
  const selectedYear = event.target.value;

  // Restablecer las variables a sus valores iniciales
  noticiasCargadas = 0;
  cargaHabilitada = true;

  // Actualizar noticiasPorCarga al cambiar la selección
  const noticiasHtml = await fetch("noticias.html").then((response) =>
    response.text()
  );
  const noticias2Html = await fetch("noticias2.html").then((response) =>
    response.text()
  );
  const noticias3Html = await fetch("noticias3.html").then((response) =>
    response.text()
  );

  // Combinar el contenido HTML de todas las páginas de noticias
  const combinedHtml = noticiasHtml + noticias2Html + noticias3Html;

  // Crear un elemento temporal para almacenar el contenido combinado y manipularlo
  const tempElement = document.createElement("div");
  tempElement.innerHTML = combinedHtml;

  // Filtrar noticias basadas en el año seleccionado
  const filteredNews = Array.from(
    tempElement.querySelectorAll(".news-item")
  ).filter((article) => {
    const articleDate = new Date(
      article.querySelector("time").getAttribute("datetime")
    );
    const articleYear = articleDate.getFullYear().toString();

    return selectedYear === "all" || selectedYear === articleYear;
  });

  // Actualizar totalNoticias con el nuevo número de noticias filtradas
  totalNoticias = filteredNews.length;

  // Actualizar noticiasPorCarga al cambiar la selección
  if (totalNoticias > 8) {
    noticiasPorCarga = 8;
  } else {
    noticiasPorCarga = totalNoticias;
  }

  // Actualizar el contenido con la nueva selección
  updateContent(selectedYear);
});

// Función para volver arriba
function volverArriba() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

// Inicialización para mostrar el contenido predeterminado al cargar la página
updateContent("all"); // Muestra todas las noticias por defecto

// Establecer 'All years' como seleccionado por defecto al cargar la página
yearSelector.value = "all";
