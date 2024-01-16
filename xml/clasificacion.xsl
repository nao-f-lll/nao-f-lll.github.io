<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/clasificacion">
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/x-icon"
      href="media/Imagenes/logos/favicon.ico"
    />
    <link rel="stylesheet" href="Estilos/general.css" />
    <link rel="stylesheet" href="Estilos/header.css" />
    <link rel="stylesheet" href="Estilos/headerMediaQuery.css" />
    <link rel="stylesheet" href="Estilos/footer.css" />
    <link rel="stylesheet" href="Estilos/footerMediaQuery.css" />
    <link rel="stylesheet" href="Estilos/clasificacion.css" />
    <script type="module" src="scripts/headerTemplate.js"></script>
    <script type="module" src="scripts/footerTemplate.js"></script>
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
    <script src="scripts/header.js"></script>

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