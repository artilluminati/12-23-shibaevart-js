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
