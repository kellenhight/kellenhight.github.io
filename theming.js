document.addEventListener("DOMContentLoaded", function() {
  var theme_toggle_button = document.getElementById("theme-button");
  var theme_icon = document.getElementById("theme-icon");

  function setTheme(theme) {
    if(theme === "dark") {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      theme_icon.setAttribute('class', 'bi bi-moon-fill');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      theme_icon.setAttribute('class', 'bi bi-sun-fill');
    }
  }
  
  function detectTheme() {
    if(localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else if(!window.matchMedia) {
      return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  setTheme(detectTheme());

  theme_toggle_button.addEventListener("click", () => {
    if(detectTheme() === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
});
