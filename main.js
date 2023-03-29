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



//MOSTRAR IMAGENES CUANDO SCROLEES A SU SECCION
const mostrarImagenes = document.querySelector(".hidden")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        return entry.isIntersecting ? entry.target.classList.add("mostrar") : entry.target.classList.remove("mostrar")
    })
},{threshold:0.2})

observer.observe(mostrarImagenes)


/* MENU CIRCULAR */
const iconMenu = document.querySelector(".icon-menu-circular")

iconMenu.addEventListener("click", () => iconMenu.classList.toggle("active"))