class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="header-container">
      <div class="top-container"></div>
      <div class="header-left-section">
        <a href="/index.html">
          <img
            class="world-rugby-logo"
            src="/media/Imagenes/logos/world_rugby_logo.svg"
            alt="world rugby logo"
            width="50"
          />
        </a>
      </div>
      <nav class="nav-container">
        <ul class="nav-list" id="nav-list">
          <li>
            <a class="nav-element" href="/index.html">
              Inicio
              <span class="underline-principal"></span>
            </a>
          </li>
          <li>
            <a class="nav-element"  href="/noticias.html">
              Noticias
              <span class="underline-secundario noticias"></span>
            </a>
          </li>
          <li class="drop-menu-parent">
            <a
              class="nav-element"
              href="#"
              onmouseover="listTeams()"
              onmouseleave="unListTeams()"
              ontouchstart="handleTeamsMenu()"
            >
              Equipos
              <img
                id="arrow_down_icon"
                class="arrow_down_icon"
                src="/media/Imagenes/logos/arrow_down_icon.png"
                alt="arrow_down_icon"
              />
              <img
                id="arrow_up_icon"
                class="arrow_up_icon"
                src="/media/Imagenes/logos/arrow_up_icon.png"
                alt="arrow_up_icon"
              />
              <span class="underline-secundario, teams-page"></span>
            </a>
            <ul
              class="drop-menu-child"
              onmouseover="listTeams()"
              onmouseleave="unListTeams()"
            >
              <li><a class="nav-element" href="/equipos/all_blacks.html">All Blacks</a></li>
              <li><a class="nav-element" href="/equipos/sakuras.html">Sakuras</a></li>
              <li><a class="nav-element" href="/equipos/springboks.html">Springboks</a></li>
              <li><a class="nav-element" href="/equipos/wallabies.html">Wallabies</a></li>
              <li><a class="nav-element" href="/equipos/shamrock.html">Shamrock</a></li>
              <li><a class="nav-element" href="/equipos/red_rose.html">Red Rose</a></li>
            </ul>
          </li>
          <li>
            <a class="nav-element hiden-element-mobile resultados-link" href="/resultados/2024.xml">
              Resultados <span class="underline-secundario, resultados"></span>
            </a>
          </li>
          <li>
            <a class="nav-element hiden-element-mobile " href="/clasificacion/2024.xml">
              Clasificación <span class="underline-secundario clasification"></span>
            </a>
          </li>
          <li>
            <a class="nav-element hiden-element-mobile" href="/estadisticas.html">
              Estadisticas <span class="underline-secundario"></span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="header-right-section">
        <input
          class="search-input"
          id="search-input"
          type="text"
          placeholder="Search"
          maxlength="200"
        />
        <button
          class="search-button"
          id="search-button"
          onclick="toggleInputSearch()"
        >
          <img
            class="search-icon"
            id="search-icon"
            src="/media/Imagenes/logos/search_icon.svg"
            alt="search-icon"
          />
        </button>
        <div class="language-button" onclick="toggleLanguageList()">
          <img
            class="globe-icon-desktop"
            src="/media/Imagenes/logos/globe_icon.png"
            alt="globe-icon-desktop"
          />
          <img
            src="/media/Imagenes/logos/glob_icon_mobile.png"
            alt="globe-icon-mobile"
            class="globe-icon-mobile"
          />
          <span id="selected-language" class="selected-language">Español</span>
          <div class="language-list" id="language-list">
          
            <a href="#" onclick="selectLanguage('Español')">Español </a>
          </div>
        </div>
        <a href="/loginSignUpForm.html"
            ><button class="sign-in-button">Iniciar Sesion</button></a
          >
      </div>
    </div>
    <img
      class="list-menu-icon"
      src="/media/Imagenes/logos/list_icon.png"
      alt="list-menu-icon"
      id="list-menu-icon"
      onclick="toggleMenuList()"
    />
    <img
      src="/media/Imagenes/logos/close_menu_icon.svg"
      alt="close-menu-icon"
      class="close-menu-icon"
      id="close-menu-icon"
      onclick="toggleCloseMenuList()"
    />
    <hr class="header-underline" />
  </header>
  
    `;

    const currentPageUrl = window.location.href;
    var targetFolder = "/noticias/";

    var resultsFolder = "/resultados/";

    var teamsFolder = "/equipos/";

    var standingsFolder = "/clasificacion/";

    if (currentPageUrl.includes(targetFolder)) {
      const paginaPrincipalAntigua = this.querySelector(".underline-principal");
      paginaPrincipalAntigua.classList.remove("underline-principal");
      paginaPrincipalAntigua.classList.add("underline-secundario");
      const paginaSecundaria = this.querySelector(".noticias");
      paginaSecundaria.classList.remove("underline-secundario");
      paginaSecundaria.classList.add("underline-principal");
      noticias;
    } else if (currentPageUrl.includes(resultsFolder)) {
      const paginaPrincipalAntigua = this.querySelector(".underline-principal");
      paginaPrincipalAntigua.classList.remove("underline-principal");
      paginaPrincipalAntigua.classList.add("underline-secundario");
      const paginaSecundaria = this.querySelector(".resultados");
      paginaSecundaria.classList.remove("underline-secundario");
      paginaSecundaria.classList.add("underline-principal");
    } else if (currentPageUrl.includes(teamsFolder)) {
      const paginaPrincipalAntigua = this.querySelector(".underline-principal");
      paginaPrincipalAntigua.classList.remove("underline-principal");
      paginaPrincipalAntigua.classList.add("underline-secundario");
      const paginaSecundaria = this.querySelector(".teams-page");
      paginaSecundaria.classList.remove("underline-secundario");
      paginaSecundaria.classList.add("underline-principal");
    } else if (currentPageUrl.includes(standingsFolder)) {
      const paginaPrincipalAntigua = this.querySelector(".underline-principal");
      paginaPrincipalAntigua.classList.remove("underline-principal");
      paginaPrincipalAntigua.classList.add("underline-secundario");
      const paginaSecundaria = this.querySelector(".clasification");
      paginaSecundaria.classList.remove("underline-secundario");
      paginaSecundaria.classList.add("underline-principal");
    }
  }
}

customElements.define("rugby-header", HeaderComponent);
