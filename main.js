const btnHamburger = document.querySelector(".hamburger"),
      items = document.querySelector(".menu__items")

btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle("is-active")
    items.classList.toggle("is-active")
})