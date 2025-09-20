export function Projetos() {
  const projetos = document.createElement("section");
  projetos.innerHTML = `
    <div id="projetos" class="projetos-container">
      <div class="area-projetos">
        <div class="projetos-texto">
          <h2>O que já construí</h2>
          <p>Esta seção reúne alguns dos projetos que desenvolvi ao longo da minha jornada como programador. Cada trabalho reflete meu processo de aprendizado, explorando diferentes linguagens e ferramentas, sempre com foco em criar soluções funcionais, bem estruturadas e de fácil uso.</p>
        </div>

        <div class="projetos-lista">
          <ul>
           <li>Projeto 1</li>
           <li>Projeto 2</li>
            <li>Projeto 3</li>
            <li>Projeto 4</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  return projetos;
}