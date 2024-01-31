// Obtener referencias a los elementos del DOM
const headerTitle = document.querySelector('.single-page-header .title');
const yearSelector = document.getElementById('YearSelector');
const newsContainer = document.querySelector('.news-articles-list');

// Función para actualizar el contenido según la selección
async function updateContent(selectedYear) {
  const newsTitle = document.querySelector('.news-title');
  
  // Cargar noticias de noticias.html, noticias2.html y noticias3.html
  const [noticiasHtml, noticias2Html, noticias3Html] = await Promise.all([
    fetch('noticias.html').then(response => response.text()),
    fetch('noticias2.html').then(response => response.text()),
    fetch('noticias3.html').then(response => response.text())
  ]);

  // Combinar el contenido HTML de todas las páginas de noticias
  const combinedHtml = noticiasHtml + noticias2Html + noticias3Html;

  // Crear un elemento temporal para almacenar el contenido combinado y manipularlo
  const tempElement = document.createElement('div');
  tempElement.innerHTML = combinedHtml;

  // Filtrar noticias basadas en el año seleccionado
  const filteredNews = Array.from(tempElement.querySelectorAll('.news-item')).filter(article => {
    const articleDate = new Date(article.querySelector('time').getAttribute('datetime'));
    const articleYear = articleDate.getFullYear().toString();

    return selectedYear === 'all' || selectedYear === articleYear;
  });

  // Limpiar el contenido actual del contenedor de noticias
  newsContainer.innerHTML = '';

  // Agregar las noticias filtradas al contenedor una por una
  filteredNews.forEach(article => {
    const articleContainer = document.createElement('li');
    articleContainer.classList.add('news-item');
    articleContainer.innerHTML = article.innerHTML;
    newsContainer.appendChild(articleContainer);
  });

  // Obtener la URL actual
  var currentUrl = window.location.href;

  // Verificar si la URL contiene "noticiasIngles.html"
  if (currentUrl.includes('noticiasIngles.html')) {
    // Estamos en la página en inglés
    newsTitle.textContent = 'All News';
    if (selectedYear === 'all') {
      newsTitle.textContent = 'All News';
    } else {
      newsTitle.textContent = `News ${selectedYear}`;
    }
  } else{
    // Estamos en la página en español
    if (selectedYear === 'all') {
      newsTitle.textContent = 'Todas las noticias';
    } else {
      newsTitle.textContent = `Noticias ${selectedYear}`;
    }
  }
}

// Evento cuando se cambia la selección en la lista desplegable
yearSelector.addEventListener('change', function (event) {
  const selectedYear = event.target.value;
  updateContent(selectedYear);
});

// Inicialización para mostrar el contenido predeterminado al cargar la página
updateContent('all'); // Muestra todas las noticias por defecto

// Establecer 'All years' como seleccionado por defecto al cargar la página
yearSelector.value = 'all';
