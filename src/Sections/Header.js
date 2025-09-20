export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
  <div id="header" class="header-container">
    <div class="header-area">
      <a href="#" class="header-logo">MS</a>
      <button class="menu-toggle" aria-label="Abrir Menu">☰</button>
      <nav class="header-nav">
        <ul>
          <li><a class="header-link" href="#">Início</a></li>
          <li><a class="header-link" href="#">Sobre</a></li>
          <li><a class="header-link" href="#">Projetos</a></li>
          <li><a class="header-link" href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  </div>
    `;

  const toggle = header.querySelector(".menu-toggle", ".header-link");
  const menu = header.querySelector(".header-nav");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

document.addEventListener('DOMContentLoaded', () => {
  const headerscroll = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      headerscroll.classList.add('scrolled');
    } else {
      headerscroll.classList.remove('scrolled');
    }
  });
});


  return header;
}
