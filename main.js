const down = document.querySelector(".down");
const img = document.querySelector(".imgSlides")
window.addEventListener("scroll", () => {
    (window.scrollY > screen.height / 100 * 25) ?
    (
        down.classList.remove("visible"),
        down.classList.add("notVisible")
    ) :
    (
        down.classList.remove("notVisible"),
        down.classList.add("visible")
    )
})