function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
    //img que será alterada
  } else {
    //se tiver sem light mode, manter a imgagem normal
    img.setAttribute("src", "./assets/assets/avatar-rick.png")
    //img padrão
  }
}
// if (html.classList.contains("light")) {
//   html.classList.remove("light")
//  } else {
//   html.classList.add("light")
// }
//Essa é uma das formas que pode ser utilizado, você usa mais atributos e propriedades, essa parte é a que ativa e desativa o modo escuro/claro
