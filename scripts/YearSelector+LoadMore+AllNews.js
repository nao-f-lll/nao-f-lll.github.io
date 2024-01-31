// Obtener referencias a los elementos del DOM
const headerTitle = document.querySelector('.single-page-header .title');
const yearSelector = document.getElementById('YearSelector');
const newsContainer = document.querySelector('.news-articles-list');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Variable para rastrear la cantidad de noticias cargadas
let loadedNewsCount = 8;

// Función para cargar y mostrar las primeras 'n' noticias desde los archivos HTML
async function loadInitialNews(count) {
  // ... (código existente para cargar noticias desde archivos)
  // Se añadió la limitación para mostrar solo las primeras 'n' noticias
  const newsItems = Array.from(tempContainer.querySelectorAll('.news-articles-list li')).slice(0, count);

  // Agregar los elementos filtrados al contenedor de noticias
  newsContainer.innerHTML = newsItems.map(item => item.outerHTML).join('');
}

// Función para cargar y mostrar más noticias
async function loadMoreNews() {
  const filenames = ['noticias.html', 'noticias2.html', 'noticias3.html'];
  let allNewsHTML = '';

  for (const filename of filenames) {
    const response = await fetch(filename);
    const htmlContent = await response.text();

    // Crear un elemento temporal para extraer solo los elementos <li> de cada archivo
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlContent;

    // Obtener todos los elementos <li> y filtrarlos según el año seleccionado
    const newsItems = Array.from(tempContainer.querySelectorAll('.news-articles-list li'));
    const selectedYear = yearSelector.value;
    const filteredNews = selectedYear === 'all' ? newsItems : newsItems.filter(item => {
      const articleDate = new Date(item.querySelector('time').getAttribute('datetime'));
      const articleYear = articleDate.getFullYear().toString();
      return selectedYear === articleYear;
    });

    // Agregar los elementos filtrados al acumulador
    allNewsHTML += filteredNews.map(item => item.outerHTML).join('');
  }

  // Incrementar la cantidad de noticias cargadas
  loadedNewsCount += 8;

  // Mostrar las noticias cargadas hasta el momento
  newsContainer.innerHTML = allNewsHTML;

  // Ocultar el botón "Cargar más" si no hay más noticias para cargar
  if (newsContainer.childElementCount < loadedNewsCount) {
    loadMoreBtn.style.display = 'none';
  }
}
function checkIfMoreNewsAvailable(selectedYear) {
  const allNews = document.querySelectorAll('.news-articles-list li');

  // Filtrar noticias según el año seleccionado
  const filteredNews = Array.from(allNews).filter(item => {
    const articleDate = new Date(item.querySelector('time').getAttribute('datetime'));
    const articleYear = articleDate.getFullYear().toString();
    return selectedYear === 'all' || selectedYear === articleYear;
  });

  // Verificar si hay más noticias del año seleccionado
  return filteredNews.length > loadedNewsCount;
}
// Función para actualizar el contenido según la selección
function updateContent() {
  const selectedYear = yearSelector.value;
  loadInitialNews(8);

  // Mostrar u ocultar el botón "Cargar más" según si hay más noticias del año seleccionado
  const hasMoreNews = checkIfMoreNewsAvailable(selectedYear);
  loadMoreBtn.style.display = hasMoreNews ? 'block' : 'none';
  
}

// Evento cuando se cambia la selección en la lista desplegable
yearSelector.addEventListener('change', function (event) {
  updateContent();
});

// Evento cuando se hace clic en el botón "Cargar más"
loadMoreBtn.addEventListener('click', loadMoreNews);

// Inicialización para mostrar el contenido predeterminado al cargar la página
updateContent();
