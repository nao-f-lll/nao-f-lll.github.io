<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/equipos">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/x-icon"
      href="../media/Imagenes/logos/favicon.ico"
    />
    <link rel="stylesheet" href="../Estilos/general.css" />
    <link rel="stylesheet" href="../Estilos/header.css" />
    <link rel="stylesheet" href="../Estilos/headerMediaQuery.css" />
    <link rel="stylesheet" href="../Estilos/footer.css" />
    <link rel="stylesheet" href="../Estilos/footerMediaQuery.css" />
    <link rel="stylesheet" href="../Estilos/equipos/equipos.css" />
    <link rel="stylesheet" href="../Estilos/equipos/squad.css " />
    <script
      type="module"
      src="../scripts/headerTemplateAbsolutePath.js"
    ></script>
    <script
      type="module"
      src="../scripts/footerTemplateAbsolutPath.js"
    ></script>
    <title>All Blacks &#x21aa; worldrugby.org</title>
  </head>
  <body>
    <rugby-header></rugby-header>
    <script src="../scripts/header.js"></script>
    <div class="top-section-container">
      <div class="text-container">
        <h1 class="title">EQUIPOS</h1>
        <p class="sub-title">
          Equipos, perfiles de jugadores, últimas noticias y video.
        </p>
      </div>
    </div>

    <div class="team-container">
      <h2 class="team-name">ALL BLACKS</h2>
      <div class="team-image all-blacks"></div>
      <div class="stats">
        <div class="header"><p class="title">Season stats</p></div>
        <div class="row">
          <div class="column">
            <div class="type">Partidos</div>
            <div class="value"><xsl:value-of select="equipo[@id='1']/partidos"></xsl:value-of></div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Victorias</div>
            <div class="value">0</div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Derrotas</div>
            <div class="value">0</div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Empates</div>
            <div class="value">0</div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="header"><p class="title">Historia</p></div>
        <div class="row">
          <div class="column">
            <div class="type">Fundación</div>
            <div class="value">1903</div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Estadio</div>
            <div class="value">Eden Park</div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Eslogan</div>
            <div class="value">Write Your Legacy</div>
          </div>
          <div class="vertical-line"></div>
          <div class="column">
            <div class="type">Logo</div>
            <div class="value logo-container">
              <img
                class="logo"
                src="../media/Imagenes/logos/all_blacks_badge_white.png"
                alt="all_blacks_badge_white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="description-container">
      <h1 class="title">About the team</h1>
      <h2 class="preview">
        The All Blacks are the most successful international men's rugby side of
        all-time with a winning percentage of 77.12% over 612 Tests (1903-2021).
      </h2>
      <p class="text">
        Vestidos de negro, con la insignia de un helecho plateado en el pecho,
        los All Blacks son la fuerza que arrasa con todo lo que le sale al paso
        en el mundo del rugby. Históricamente, el equipo que representa a Nueva
        Zelanda, tiene un 76% de victorias lo que refleja su poder dominante,
        supremacía que ha acentuado desde que ganó el Mundial de Rugby en 2011.
        En los últimos cuatro años, los All Blacks han ganado 42 de los 47
        partidos que han disputado (89%) y sólo han perdido tres veces:
        Inglaterra en 2012, Sudáfrica en 2014 y Australia el mes pasado. Lideran
        la clasificación del rugby desde hace seis años y han ocupado ese lugar
        en 10 de los 12 años desde que se estableció la clasificación en 2003.
      </p>
    </div>

    <div class="squad-container">
      <div class="squad-header">
        <p class="squad-header-title">Current Squad</p>
      </div>
      <div class="squad-cards-container">
        <div class="slider-wrapper">
          <button id="prev-silde" class="flow-left-button flow-button">
            <img
              src="../media/Imagenes/logos/arrow_left_white_icon.png"
              alt="arrow_left_white_icon"
            />
          </button>
          <div class="image-list">
            <span class="name-container">
              <img
                id="first-child-image"
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Aaron-Smith.png"
                alt="cape_town_preview"
              />
              <button class="name-button name-button-first-child">
                <p class="player-name">Aaron Smith</p>
              </button>
            </span>

            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Anton-Lienert-Brown.png"
                alt="/fans_in_lyon"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Anton Lienert Brown</p>
              </button>
            </span>

            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Ardia-Savea.png"
                alt="fans_try"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Ardia Savea</p>
              </button>
            </span>
            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Beauden-Barrett.png"
                alt="rugby_award"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Beauden Barrett</p>
              </button>
            </span>
            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Braydon-Ennor.png"
                alt="same_cane"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Braydon Ennor</p>
              </button>
            </span>
            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Brodie-Retallick.png"
                alt="rugby_recoded"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Brodie Retallick</p>
              </button>
            </span>
            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Caleb-Clarke.png"
                alt="press_conference"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Caleb Clarke</p>
              </button>
            </span>
            <span class="name-container">
              <img
                src="../media/Imagenes/teams/players/all_blacks/Cam-Roigard.png"
                alt="match_highlights"
                class="image-item"
              />
              <button class="name-button">
                <p class="player-name">Cam Roigard</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                onclick="location.href='videos/preview-cape-town-svns-2023.html'"
                src="../media/Imagenes/teams/players/all_blacks/Codie-Taylor.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Codie Taylor</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                onclick="location.href='videos/preview-cape-town-svns-2023.html'"
                src="../media/Imagenes/teams/players/all_blacks/Dallas-McLeod.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Dallas McLeod</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Dalton-Papalii.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Dalton-Papalii</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Dane-Coles.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Dane Coles</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Emoni-Narawa.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Emoni Narawa</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Finlay-Christie.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Finlay Christie</p>
              </button>
            </span>

            <span class="name-container">
              <img
                class="image-item"
                src="../media/Imagenes/teams/players/all_blacks/Sam-Cane.png"
                alt="cape_town_preview"
              />
              <button class="name-button">
                <p class="player-name">Sam Cane</p>
              </button>
            </span>
          </div>

          <button id="next-silde" class="flow-right-button flow-button">
            <img
              src="../media/Imagenes/logos/arrow_right_white_icon.png"
              alt="arrow_right_white_icon"
            />
          </button>
        </div>
      </div>
    </div>

    <script src="../scripts/slider.js"></script>

    <rugby-footer></rugby-footer>
  </body>
</html>



</xsl:template>
</xsl:stylesheet>