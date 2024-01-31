$(document).ready(function () {
    // Función para cargar las primeras 8 noticias al cargar la página
    loadNews();
  
    // Función para cargar más noticias cuando se hace clic en el botón "Cargar más"
    $("#loadMoreBtn").click(function () {
      loadMoreNews();
    });
  
    // Función para cargar noticias según el año seleccionado en el selector
    $("#YearSelector").change(function () {
      loadNews();
    });
  
    function loadNews() {
      var selectedYear = $("#YearSelector").val();
      var newsContainer = $("#newsContainer");
  
      // Oculta el botón de carga al principio
      $("#loadMoreBtn").hide();
  
      // Limpia el contenedor de noticias
      newsContainer.empty();
  
      // Filtra las noticias por el año seleccionado y limita a mostrar solo 8
      var filteredNews = $("ul#newsContainer li").filter(function () {
        var newsYear = $(this).find("time").attr("datetime").substring(0, 4);
        return selectedYear === "all" || selectedYear === newsYear;
      }).slice(0, 8);
  
      // Muestra las noticias filtradas
      newsContainer.append(filteredNews);
  
      // Si hay más noticias, muestra el botón "Cargar más"
      if (filteredNews.length < $("ul#newsContainer li").length) {
        $("#loadMoreBtn").show();
      }
    }
  
    function loadMoreNews() {
      var selectedYear = $("#YearSelector").val();
      var newsContainer = $("#newsContainer");
  
      // Obtiene el número actual de noticias mostradas
      var currentNewsCount = newsContainer.find("li").length;
  
      // Filtra las noticias por el año seleccionado y muestra las siguientes 8
      var moreNews = $("ul#newsContainer li").filter(function (index) {
        var newsYear = $(this).find("time").attr("datetime").substring(0, 4);
        return (selectedYear === "all" || selectedYear === newsYear) && index >= currentNewsCount && index < currentNewsCount + 8;
      });
  
      // Muestra las noticias adicionales
      newsContainer.append(moreNews);
  
      // Si no hay más noticias, oculta el botón "Cargar más"
      if (moreNews.length < 8) {
        $("#loadMoreBtn").hide();
      }
    }
  });