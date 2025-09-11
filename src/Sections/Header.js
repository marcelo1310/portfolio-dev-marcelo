export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
  <div class="header-container">
    <div class="header-logo"></div>
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
    `;

  const toggle = header.querySelector(".menu-toggle");
  const menu = header.querySelector(".header-nav");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  return header;
}
