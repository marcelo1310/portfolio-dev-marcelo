import img from "../img/og-img.jpg";
import { Botao } from "../Components/Botao/Botao";

export function Hero() {
  const hero = document.createElement("section");
  hero.innerHTML = `
    <div id="hero" class="hero">
    <div class="hero-container">
      <div class="hero-area-img"><img src="${img}" alt="Imagem de destaque" /></div>
      <div class="hero-text">
        <div class="text-area">
         <h1>Olá, sou o <span>Marcelo</span></h1>
          <p class="minha-funcao">Desenvolvedor de sistemas</p>
        </div>
        <p>Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis.</p>
        <div class="btn-container"></div>
      </div>
    </div>
  `;

  const btnChamada = Botao("Contate-me", "#sobre");
  hero.querySelector(".btn-container").appendChild(btnChamada);

  const btnProjetos = Botao("Projetos", "#projetos");
  hero.querySelector(".btn-container").appendChild(btnProjetos);

  return hero;
}
