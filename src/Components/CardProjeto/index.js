export function Cards(img, titulo, descricao, link) {
  const cards = document.createElement("div");
  cards.innerHTML = `
    <div class="projeto-item">
        <img src="${img}" alt="${titulo}"/>
        <div class="projeto-info">
            <h3>${titulo}</h3>
            <p>${descricao}</p>  
        </div>

        <div class="projeto-links">
          <a href="${link}" target="_blank"><i class="fa-solid fa-globe"></i></a>
          <a href="${link}" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
    `;
  return cards;
}

