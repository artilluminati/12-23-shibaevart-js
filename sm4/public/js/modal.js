const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#openModal");
const closeModalBtn = document.querySelector(".modal .close");

openModalBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
});