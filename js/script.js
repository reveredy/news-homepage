const menu = document.querySelector(".menu-mobile");

function abrirMenu(event) {
  const img = document.querySelector(".menu-mobile img");
  document.querySelector(".menu_princ").classList.toggle("ativo");

  if (document.querySelector(".menu_princ.ativo")) {
    img.setAttribute("src", "./assets/images/icon-menu-close.svg");
  } else {
    img.setAttribute("src", "./assets/images/icon-menu.svg");
  }
}

menu.addEventListener("click", abrirMenu);
