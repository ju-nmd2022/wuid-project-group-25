const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
.addEventListener('click', toggleModal);

document.querySelector('.modal__close-bar span')
   .addEventListener('click', toggleModal);



//The next lines are adapted from the video https://youtu.be/9HcxHDS2w1s


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>{
button.addEventListener("click", () =>{
    const offset= button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlides= slides.querySelector("[data-active]")
    let newIndex = [... slides.children].indexOf(activeSlides)+ offset

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active= true
    delete activeSlides.dataset.active
})
})