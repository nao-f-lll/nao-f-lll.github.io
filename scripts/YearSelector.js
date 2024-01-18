// Obtener referencias a los elementos del DOM
const headerTitle = document.querySelector('.single-page-header .title');
const yearSelector = document.getElementById('YearSelector');
const newsContainer = document.querySelector('.news-articles-list');

// Función para actualizar el contenido según la selección
function updateContent(selectedYear) {
  const newsTitle = document.querySelector('.news-title');

  if (selectedYear === 'all') {
    newsTitle.textContent = 'All News';
    // Aquí puedes agregar lógica para cargar todas las noticias
    // Por ejemplo: newsContainer.innerHTML = obtenerTodasLasNoticias();
  } else {
    newsTitle.textContent = `News ${selectedYear}`;
    // Aquí puedes agregar lógica para cargar contenido específico según el año seleccionado
    // Por ejemplo: newsContainer.innerHTML = obtenerNoticiasPorAño(selectedYear);
  }
}

// Evento cuando se cambia la selección en la lista desplegable
yearSelector.addEventListener('change', function(event) {
  const selectedYear = event.target.value;
  updateContent(selectedYear);
});

// Inicialización para mostrar el contenido predeterminado al cargar la página
updateContent('all'); // Muestra todas las noticias por defecto
