"use strict";
// Количество проектов на данный момент
const NUM_LINKS = 2;

// Функция для генерации ссылок
function generateLinks(start, end) {
    const links = [];
    for (let i = start; i <= end; i++) {
        links.push(`sm${i}/index.html`);
    }
    return links;
}

// Генерируем ссылки для диапазона от 1 до 10 (измените на нужные значения)
const linksArray = generateLinks(1, NUM_LINKS);

// Выводим ссылки на страницу
function displayLinks() {
    const linksContainer = document.getElementById("links");
    linksArray.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = link;
        linksContainer.appendChild(anchor);
        linksContainer.appendChild(document.createElement("br")); // Перенос на новую строку
    });
}

// Получаем элементы иконок и body
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const body = document.body;

// Проверка текущей темы
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcons(savedTheme);
}

// Переключение тем по клику
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark-theme");
        updateIcons("dark-theme");
    } else {
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
        updateIcons("light-theme");
    }
});

// Обновление иконок в зависимости от темы
function updateIcons(theme) {
    if (theme === "light-theme") {
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
    } else {
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    }
}

// Выполняем функцию после загрузки страницы
window.onload = displayLinks;
