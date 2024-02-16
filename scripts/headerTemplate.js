class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header> 
      <div class="header-container">
        <!--Contenedor que aparece solo en la ultima media query-->
        <div class="top-container"></div>
        <!--Seccion izquierda del header incluye el logo de la federacion-->
        <div class="header-left-section">
          <a href="index.html">
            <img
              class="world-rugby-logo"
              src="media/Imagenes/logos/world_rugby_logo.svg"
              alt="world rugby logo"
              width="50"
            />
          </a>
        </div>
        <!-- Menu de Navegacion -->
        <nav class="nav-container">
          <ul class="nav-list" id="nav-list">
            <li>
              <a class="nav-element" href="index.html">
                Inicio
                <span class="underline-principal"></span
              ></a>
            </li>
            <li>
              <a class="nav-element" href="noticias/section/noticias.html">
                Noticias
                <span class="underline-secundario"></span
              ></a>
            </li>
            <!-- Lista especial que ejecuta funciones basando en las acciones del raton -->
            <li class="drop-menu-parent">
              <a
                class="nav-element"
                href="#"
                onmouseover="listTeams()"
                onmouseleave="unListTeams()"
                ontouchstart="handleTeamsMenu()"
              >
                Equipos
                <!-- icono de flecha hacia abajo que aparece en estado normal-->
                <img
                  id="arrow_down_icon"
                  class="arrow_down_icon"
                  src="media/Imagenes/logos/arrow_down_icon.png"
                  alt="arrow_down_icon"
                />
                <!-- icono de flecha hacia arriba que aparece en el estado de hover -->
                <img
                  id="arrow_up_icon"
                  class="arrow_up_icon"
                  src="media/Imagenes/logos/arrow_up_icon.png"
                  alt="arrow_up_icon"
                />

                <!-- la barra que aparece en la pagina activa y en el hover de las paginas no activas 
                se repite en todos los elementos del menu-->
                <span class="underline-secundario"></span>
              </a>
              <!-- sub lista -->
              <ul
                class="drop-menu-child"
                onmouseover="listTeams()"
                onmouseleave="unListTeams()"
              >
                <li>
                  <a class="nav-element" href="equipos/all_blacks.html"
                    >All Blacks</a
                  >
                </li>
                <li>
                  <a class="nav-element" href="equipos/sakuras.html">Sakuras</a>
                </li>
                <li>
                  <a class="nav-element" href="equipos/springboks.html"
                    >Springboks
                  </a>
                </li>
                <li>
                  <a class="nav-element" href="equipos/wallabies.html"
                    >Wallabies
                  </a>
                </li>
                <li>
                  <a class="nav-element" href="equipos/shamrock.html"
                    >Shamrock
                  </a>
                </li>
                <li>
                  <a class="nav-element" href="equipos/red_rose.html"
                    >Red Rose
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-element hiden-element-mobile resultados-link" href="resultados/2024.xml"
                >Resultados <span class="underline-secundario"></span>
              </a>
            </li>
            <li>
              <a
                class="nav-element hiden-element-mobile"
                href="clasificacion/2024.xml"
              >
                Clasificación <span class="underline-secundario"></span>
              </a>
            </li>
            <li>
              <a
                class="nav-element hiden-element-mobile"
                href="estadisticas.html"
              >
                Estadisticas
                <span class="underline-secundario"></span>
              </a>
            </li>
          </ul>
        </nav>
        <!--Sección derecha del header incluye el cuadro de búsqueda 
          y el botón que permite cambiar el idioma, también el inicio de sesión-->
        <div class="header-right-section">
          <input
            class="search-input"
            id="search-input"
            type="text"
            placeholder="Search"
            maxlength="200"
          />
          <!-- el cuadro de busqueda-->
          <button
            class="search-button"
            id="search-button"
            onclick="toggleInputSearch()"
          >
            <img
              class="search-icon"
              id="search-icon"
              src="media/Imagenes/logos/search_icon.svg"
              alt="search-icon"
            />
          </button>
          <!--El buton que permite cambiar el idioma contiene 
            funciones que encargan este caso-->
          <div class="language-button" onclick="toggleLanguageList()">
            <!--icono de idiomas para el ordenador-->
            <img
              class="globe-icon-desktop"
              src="media/Imagenes/logos/globe_icon.png"
              alt="globe-icon-desktop"
            />
            <!--icono de idiomas para el movil-->
            <img
              src="media/Imagenes/logos/glob_icon_mobile.png"
              alt="globe-icon-mobile"
              class="globe-icon-mobile"
            />
            <!--función que cambia el texto basando en el idioma elegido-->
            <span id="selected-language" class="selected-language"
              >Español</span
            >
            <div class="language-list" id="language-list">
            
              <a href="#" onclick="selectLanguage('Español')">Español </a>
            </div>
          </div>

          <a href="login-sign-up-form.html"
          ><button class="sign-in-button">Iniciar Sesion</button></a
        >
        </div>
      </div>
      <!--icono de menú desplegable cerrado; aparece solo en versión del móvil-->
      <img
        class="list-menu-icon"
        src="media/Imagenes/logos/list_icon.png"
        alt="list-menu-icon"
        id="list-menu-icon"
        onclick="toggleMenuList()"
      />
      <!--icono de menú desplegable abierto; aparece solo en versión del móvil-->
      <img
        src="media/Imagenes/logos/close_menu_icon.svg"
        alt="close-menu-icon"
        class="close-menu-icon"
        id="close-menu-icon"
        onclick="toggleCloseMenuList()"
      />
      <hr class="header-underline" />
    </header>
    `;

    const currentPage = window.location.href;

    const paginaPrincipalAntigua = this.querySelector(".underline-principal");
    const paginasSecundarias = this.querySelectorAll(".underline-secundario");

    paginaPrincipalAntigua.classList.remove("underline-principal");
    paginaPrincipalAntigua.classList.add("underline-secundario");

    paginasSecundarias.forEach((pagina) => {
      const enlace = pagina.parentElement.getAttribute("href");

      if (currentPage.includes(enlace)) {
        pagina.classList.remove("underline-secundario");
        pagina.classList.add("underline-principal");
      }
    });
  }
}

customElements.define("rugby-header", HeaderComponent);
