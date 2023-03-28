const btnHamburger = document.querySelector(".hamburger"),
      items = document.querySelector(".menu__items")

btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle("is-active")
    items.classList.toggle("is-active")  
})


//lIGHTBOX JS

const images = document.querySelectorAll("#img"),
      containerImage = document.querySelector(".container-img"),
      imageContainer = document.querySelector(".img-show"),
      copy = document.querySelector(".copy"),
      cerrarModal = document.querySelector("i")

images.forEach(image => {
    image.addEventListener("click", () => {
        addImage(image.getAttribute("src"),image.getAttribute("alt"))
    })
})

const addImage = (srcImage, altImage) => {
    containerImage.classList.toggle("move")
    imageContainer.classList.toggle("show")
    copy.innerHTML = altImage
    imageContainer.src = srcImage
    imageContainer.alt = altImage
}

cerrarModal.addEventListener("click", () => {
    containerImage.classList.toggle("move")
    imageContainer.classList.toggle("show")
})