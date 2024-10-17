// Функция для переключения темы
const toggleTheme = () => {
    const body = document.body;
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
    }
};

// Привязываем обработчик события к переключателю
document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);

// Функция для генерации структуры ссылок
function generateLinks(rootFolders) {
    const linksContainer = document.getElementById("links");

    rootFolders.forEach((folder, index) => {
        // Создаем заголовок для каждой корневой папки
        const folderTitle = document.createElement("h2");
        folderTitle.textContent = `${index + 1}`;
        linksContainer.appendChild(folderTitle);

        // Контейнер для ссылок на подпапки
        const subfolderLinks = document.createElement("div");
        subfolderLinks.classList.add("subfolder-links");

        // Перебираем подпапки
        for (
            let subfolder = 1;
            subfolder <= folder.subfolderCount;
            subfolder++
        ) {
            const link = document.createElement("a");
            link.href = `${index + 1}/${subfolder}/index.html`;
            link.textContent = `${index + 1} / ${subfolder}`;
            subfolderLinks.appendChild(link);
            subfolderLinks.appendChild(document.createElement("br"));
        }

        linksContainer.appendChild(subfolderLinks);
    });
}

// Пример корневых папок и их подпапок
const rootFolders = [{ subfolderCount: 5 }, { subfolderCount: 1 }];

// Генерируем ссылки при загрузке страницы
window.onload = () => generateLinks(rootFolders);
