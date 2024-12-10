document.addEventListener("DOMContentLoaded", function() {
  var theme_toggle_button = document.getElementById("toggle_button");

  function setTheme(theme) {
    if(theme === "dark") {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      theme_toggle_button.setAttribute('value', '<i class="bi-moon"></i>');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      theme_toggle_button.setAttribute('value', '<i class="bi-sun-fill"></i>');
    }
  }
  
  function detectTheme() {
    if(localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else if(!window.matchMedia) {
      return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
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
