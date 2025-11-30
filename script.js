const toggleBtn = document.getElementById("theme-toggle");
const fiverrIcon = document.getElementById("fiverr-icon"); // <-- Находим вашу PNG-иконку!

// ----------------------------------------------------
// 💡 ШАГ 1: Определяем пути к двум версиям иконки
// ----------------------------------------------------
const iconSrcLight = "image/fiverr-black.png"; // Белая иконка (для светлого фона)
const iconSrcDark = "image/fiverr-white.png";  // Черная иконка (для темного фона)
// ----------------------------------------------------


// Функция для обновления SRC иконки
function updateFiverrIcon(isDark) {
    if (fiverrIcon) {
        if (isDark) {
            // Если включена ТЕМНАЯ тема (body.dark), ставим ЧЕРНУЮ иконку
            fiverrIcon.src = iconSrcDark;
        } else {
            // Если включена СВЕТЛАЯ тема (нет body.dark), ставим БЕЛУЮ иконку
            fiverrIcon.src = iconSrcLight;
        }
    }
}


// Функция переключения темы (уже была у вас)
function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // 💡 ШАГ 2: Вызываем функцию обновления иконки после смены класса
    updateFiverrIcon(isDark); 
}


// Проверка сохранённой темы и системной темы (уже была у вас)
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let isDarkTheme = false;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark");
        isDarkTheme = true;
    } else {
        document.body.classList.remove("dark");
        isDarkTheme = false;
    }

    // 💡 ШАГ 3: Вызываем функцию обновления иконки при загрузке страницы
    updateFiverrIcon(isDarkTheme);
}


// Слушатель кнопки
if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
}

// Инициализация при загрузке страницы
loadTheme();