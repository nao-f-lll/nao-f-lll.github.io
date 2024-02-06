class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>
    <hr class="footer-underline" />
    <div class="footer-container">
      <div class="logo-container">
        <img
          class="world-rugby-logo"
          src="/media/Imagenes/logos/world_rugby_logo.svg"
          alt="world_rugby_logo"
        />
      </div>
      <div class="middle-section-container">
        <ul class="footer-list">
          <li class="footer-list-element"><a href="#">PRIVACIDAD</a></li>
          <li class="footer-list-element">
            <span class="entity-element">&#x2022;</span>
          </li>
          <li class="footer-list-element"><a href="#">SOBRE NOSOTROS</a></li>
          <li class="footer-list-element">
            <span class="entity-element">&#x2022;</span>
          </li>
          <li class="footer-list-element"><a href="contacto.html">CONTACTO</a></li>
          <li class="footer-list-element">
            <span class="entity-element">&#x2022;</span>
          </li>
          <li class="footer-list-element">
            <a href="#">PREGUNTAS FRECUENTES</a>
          </li>
        </ul>
  
        <p class="copyright-desclaimer">
          Copyright World Rugby 1886-2024 &#xa9;
        </p>
      </div>
      <div class="social-media">
        <img
          class="twitter-x-icon"
          src="/media/Imagenes/logos/twitterx_icon.png"
          alt="twitter_x_icon"
        />
        <img
          class="youtube-icon"
          src="/media/Imagenes/logos/youtube_icon.svg"
          alt="youtube_icon"
        />
        <a href="https://www.reddit.com/r/rugbyunion/" target="_blank">
          <img
            class="reddit-icon"
            src="/media/Imagenes/logos/reddit_icon.png"
            alt="reddit_icon"
          />
        </a>
      </div>
    </div>
    <div class="mobile-version-container">
      <p class="copyright-desclaimer-mobile">
        Copyright World Rugby 1886-2024 &#xa9;
      </p>
      <img
        class="world-rugby-logo-mobile"
        src="/media/Imagenes/logos/world_rugby_logo.svg"
        alt="world_rugby_logo"
      />
    </div>
  </footer>
  `;
  }
}

customElements.define("rugby-footer", FooterComponent);
