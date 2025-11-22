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

// Плавное обновление переменных CSS при переключении (если нужно)
function updateCSSVars() {
    const root = document.documentElement;
    if (document.body.classList.contains("dark")) {
        root.style.setProperty('--bg', '#0a0a0a');
        root.style.setProperty('--text', '#f5f5f5');
        root.style.setProperty('--card-bg', '#131313');
        root.style.setProperty('--border', '#ffffff22');
        root.style.setProperty('--btn-hover-bg', '#fff');
        root.style.setProperty('--btn-hover-text', '#000');
        root.style.setProperty('--skill-hover-bg', '#fff');
        root.style.setProperty('--skill-hover-text', '#000');
    } else {
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--text', '#111');
        root.style.setProperty('--card-bg', '#f7f7f7');
        root.style.setProperty('--border', '#111');
        root.style.setProperty('--btn-hover-bg', '#000');
        root.style.setProperty('--btn-hover-text', '#fff');
        root.style.setProperty('--skill-hover-bg', '#111');
        root.style.setProperty('--skill-hover-text', '#fff');
    }
}

// Слушатель кнопки
toggleBtn.addEventListener("click", () => {
    toggleTheme();
    updateCSSVars();
});

// Инициализация при загрузке страницы
loadTheme();
updateCSSVars();