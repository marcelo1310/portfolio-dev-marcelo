import { Cards } from "../../Components/CardProjeto";
import img1 from "../../img/img-hero.jpg"

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
          ${Cards(img1, "Projeto 1", "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet", "https://github.com/seuusuario/projeto1").outerHTML}
          ${Cards(img1, "Projeto 2", "Descrição do Projeto 2", "https://github.com/seuusuario/projeto2").outerHTML}
          ${Cards(img1, "Projeto 3", "Descrição do Projeto 3", "https://github.com/seuusuario/projeto3").outerHTML}
        </div>
      </div>
    </div>
  `;
  return projetos;
}