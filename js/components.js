

(function () {

  const navHTML = `
  <nav class="nav" id="main-nav">
    <a href="../index.html" class="nav__brand">
      <span class="nav__avatar">
        <img
          src="../img/image.png"
          alt="Mahesh Reddy"
          class="nav__avatar-img"
        >
      </span>
      Mahesh
    </a>

    <button class="nav__toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav__links">
      <li><a href="../pages/research.html">Research</a></li>
      <li><a href="../pages/experience.html">Experience</a></li>
      <li><a href="../pages/projects.html">Projects</a></li>
      <li><a href="../pages/blog.html">Blog</a></li>
    </ul>
  </nav>`;

  const homeNavHTML = `
  <nav class="nav" id="main-nav">
    <a href="index.html" class="nav__brand">
      <span class="nav__avatar">
        <img
          src="img/image.png"
          alt="Mahesh Reddy"
          class="nav__avatar-img"
        >
      </span>
      Mahesh
    </a>

    <button class="nav__toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav__links">
      <li><a href="pages/research.html">Research</a></li>
      <li><a href="pages/experience.html">Experience</a></li>
      <li><a href="pages/projects.html">Projects</a></li>
      <li><a href="pages/blog.html">Blog</a></li>
    </ul>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      This website uses
      <a
        href="https://arpandeep.com/"
        target="_blank"
        rel="noopener"
      >
        Template
      </a>
    </div>
  </footer>`;

  /* Inject nav */
  const navTarget = document.getElementById("nav-placeholder");

  if (navTarget) {
    const isHome = navTarget.dataset.home === "true";
    navTarget.outerHTML = isHome ? homeNavHTML : navHTML;
  }

  /* Inject footer */
  const footerTarget = document.getElementById("footer-placeholder");

  if (footerTarget) {
    footerTarget.outerHTML = footerHTML;
  }

})();
