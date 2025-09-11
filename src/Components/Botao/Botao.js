export function Botao(texto, link) {
  const botao = document.createElement("a");

  botao.innerText = texto;
  botao.href = link;
  botao.classList.add("botao");
  return botao;
}
