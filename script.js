const toggleBtn = document.getElementById("theme-toggle");

// Функция переключения темы
function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Проверка сохранённой темы и системной темы
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}



// Слушатель кнопки
if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
}

// Инициализация при загрузке страницы
loadTheme();