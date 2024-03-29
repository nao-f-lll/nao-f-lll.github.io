<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="temporadasDoc" select="document('temporadas.xml')"/>

<xsl:template match="/clasificacion">
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
    <link rel="stylesheet" href="../estilos/clasificacion.css" />
    <script type="module" src="../scripts/headerTemplateAbsolutePath.js"></script>
    <script type="module" src="../scripts/footerTemplateAbsolutPath.js"></script>
    <script
    src="https://kit.fontawesome.com/6cb64a97a2.js"
    crossorigin="anonymous"
  ></script>
    <title>Clasificación &#x21aa; worldrugby.org</title>
  </head>
  <body>
    <rugby-header></rugby-header>
    <div class="top-section-container">
      <div class="text-container">
        <h1 class="title">Super Rugby</h1>
        <p class="sub-title">Team Standings.</p>
      </div>
    </div>
    <script src="../scripts/header.js"></script>

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


    <div class="wrapper">
      <table>
        <tr>
          <th>Posición</th>
          <th colspan="2">Equipo</th>
          <th class="games-played">Partidos</th>
          <th class="wins">Victorias</th>
          <th class="loses">Derrotas</th>
          <th class="ties">Empates</th>
          <th>Puntos</th>
        </tr>
       
        <xsl:for-each select = "fila">
          <xsl:sort select="victorias" order="descending" data-type="number"/>
          <xsl:sort select="empates" order="descending" data-type="number"/>
          <xsl:sort select="derrotas" order="ascending" data-type="number"/>        
          <xsl:sort select="puntos" order="descending" data-type="number"/>
        <tr>
          <td data-cell="position"><xsl:value-of select="posicion"></xsl:value-of> </td>
          <td data-cell="logo">
            <img
              class="logo"
              src="{equipo/logo}"
              alt=""
            />
          </td>
          <td data-cell="name"><xsl:value-of select="equipo/nombre"></xsl:value-of></td>
          <td data-cell="games-played"><xsl:value-of select="partidos"></xsl:value-of></td>
          <td data-cell="wins"><xsl:value-of select="victorias"></xsl:value-of></td>
          <td data-cell="loses"><xsl:value-of select="derrotas"></xsl:value-of></td>
          <td data-cell="ties"><xsl:value-of select="empates"></xsl:value-of></td>
          <td data-cell="points"><xsl:value-of select="puntos"></xsl:value-of></td>
        </tr> 
      </xsl:for-each>
      </table>
    </div>
    <rugby-footer></rugby-footer>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>