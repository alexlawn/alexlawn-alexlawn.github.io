function toggle(theme) {
    var styleSheet = document.getElementById("theme");
    if (theme != styleSheet.href) styleSheet.href = theme;
    document.getElementById("light").src.onClick = styleSheet.href === "styles-light.css";
  }
  window.addEventListener("click", function() {
    var theme = localStorage.getItem("theme") || document.getElementById("theme").href;
    toggle(theme);
    document.getElementById("light").addEventListener("click", function() {
      var theme = this.onClick ? "styles-light.css" : "styles-dark.css"
      toggle(theme);  
      localStorage.setItem("theme", theme);
    })
  })
