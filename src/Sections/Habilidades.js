
export function Habilidades() {
  const habilidades = document.createElement("section");
  habilidades.innerHTML = `
    <div class="habilidades-container">
        <h2>Minhas Habilidades</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
    </div>
  `;
  return habilidades;
}
