<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="temporadasDoc" select="document('../clasificacion/temporadas.xml')"/>
<xsl:template match="/resultados">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/x-icon"
      href="../media/Imagenes/logos/favicon.ico"
    />
    <link rel="stylesheet" href="../estilos/general.css" />
    <link rel="stylesheet" href="../estilos/header.css" />
    <link rel="stylesheet" href="../estilos/headerMediaQuery.css" />
    <link rel="stylesheet" href="../estilos/footer.css" />
    <link rel="stylesheet" href="../estilos/footerMediaQuery.css" />
    <link rel="stylesheet" href="../estilos/resultados.css" />
    <script type="module" src="../scripts/headerTemplateAbsolutePath.js"></script>
    <script type="module" src="../scripts/footerTemplateAbsolutPath.js"></script>
    <script
    src="https://kit.fontawesome.com/6cb64a97a2.js"
    crossorigin="anonymous"
  ></script>
    <title>Resultados &#x21aa; worldrugby.org</title>
  </head>
  <body>
    <rugby-header></rugby-header>
    <script src="../scripts/header.js"></script>
    <div class="top-section-container">
      <div class="text-container">
        <h1 class="title">Partidos y Resultados</h1>
        <p class="sub-title">Competiciones y Últimos resultados.</p>
      </div>
    </div>
    
    <div class="select-outer-container">
      <div class="select-container">
        <select class="select-box" name="selectBox" id="selectBox">
          <option >Elige una temporada</option>
         

          <xsl:for-each select="$temporadasDoc/temporadas/temporada">
         
          <xsl:variable name="year" select="normalize-space(year)"/>
          <xsl:variable name="estado" select="normalize-space(estado)"/>
        
          <xsl:choose>
            <xsl:when test="$estado = 'proximamente'">
              <option onclick="window.location='proximamente.xml'" value="proximamente">
                <xsl:value-of select="$year"/>
              </option>
            </xsl:when>
            <xsl:otherwise>
              <option onclick="window.location='{normalize-space($year)}.xml'" value="{normalize-space($year)}">
                <xsl:value-of select="$year"/>
              </option>
            </xsl:otherwise>
          </xsl:choose>

         </xsl:for-each>
          
        </select>
        <div class="select-box-icon-container">
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>

    <xsl:for-each select = "jornada">
    <div class="results-container">
      <h3 class="jornada-title">Jornada <xsl:value-of select="orden"></xsl:value-of></h3>
      <xsl:for-each select="partido"> 
      <div class="game-container">
        <div class="teams-scores-container">
          <div class="left-part-container">
            <img
              class="team-logo"
              src="{equipo_local/logo/image}"
              alt="all_blacks_badge"
            />
            <div class="scores">
              <p><xsl:value-of select="equipo_local/puntos"></xsl:value-of></p>
              <p>-</p>
              <p><xsl:value-of select="equipo_visitante/puntos"></xsl:value-of></p>
            </div>
            <img
              class="team-logo"
              src="{equipo_visitante/logo/image}"
              alt="south_Africa_national_rugby_union_team"
            />
          </div>
          <div class="middle-section">
            <div class="vertical-line"></div>
            <div class="date-time">
              <span class="date"><xsl:value-of select="fecha"></xsl:value-of></span>
              <span class="time"><xsl:value-of select="hora"></xsl:value-of></span>
            </div>
          </div>
          <div class="middle-section-right">
            <span class="location"><xsl:value-of select="estadio"></xsl:value-of>
              <xsl:value-of select="ciudad"></xsl:value-of></span>
          </div>
          <div class="button-container">
            <button class="report-button">INFORME</button>
          </div>
        </div>
      </div>
    </xsl:for-each>
      </div>
  </xsl:for-each>
  <rugby-footer></rugby-footer>
  </body>
</html>

</xsl:template>
</xsl:stylesheet>