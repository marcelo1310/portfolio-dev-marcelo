export function Footer() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-container">
        <p>&copy; 2023 Meu Portfólio. Todos os direitos reservados.</p>
    </div>
  `;
  return footer;
}
