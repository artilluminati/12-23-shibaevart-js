function triggerBurger(event) {
    const burger = document.querySelector(".burger");
    const buttonImage = event.currentTarget.querySelector("img");

    burger.classList.toggle("open");

    if (burger.classList.contains("open")) {
        buttonImage.src = "public/images/icons/close.svg";
    } else {
        buttonImage.src = "public/images/icons/menu.svg";
    }
}

function closeMenu() {
    const burger = document.querySelector(".burger");
    const buttonImage = document.querySelector(".burger__button img");

    if (burger.classList.contains("open")) {
        burger.classList.remove("open");
        buttonImage.src = "public/images/icons/menu.svg"; // Меняем изображение кнопки
    }
}

document.addEventListener("click", function (event) {
    const burger = document.querySelector(".burger");
    const button = document.querySelector(".burger__button");

    if (
        !burger.contains(event.target) &&
        !button.contains(event.target) &&
        burger.classList.contains("open")
    ) {
        closeMenu();
    }
});

function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("open");
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("open");
}

async function deleteUser(event, userId, token) {
    event.preventDefault();
    console.log(userId);
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${userId}`,
            {
                method: "DELETE",
            }
        );
        const deletedUsed = await response.json();
        alert(`Your profile successfully deleted!`);
        location.reload();
    } catch (error) {
        console.error("User deletion error:", error);
        return;
    }
}
