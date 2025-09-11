export function Projetos() {
  const projetos = document.createElement("section");
  projetos.innerHTML = `
    <div class="projetos-container">
        <h2>Meus Projetos</h2>
        <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            <li>Projeto 4</li>
        </ul>
    </div>
  `;
  return projetos;
}
