const header = document.querySelector("#header-nav");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.classList.add("expanded");
    } else {
        header.classList.remove("expanded");
    }
})