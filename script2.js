// Button selection
const buttonLight = document.querySelector(".displayButton#light");
localStorage.setItem("buttonLight", buttonLight);
const buttonDark = document.querySelector(".displayButton#dark");
localStorage.setItem("buttonDark", buttonDark);

// Style selection
const lightStyle = "styles-light.css";
const darkStyle = "styles-dark.css";

// Select the stylesheet <link>
const theme = document.querySelector(".theme-link");

  function switchTheme() {
    if (window.localStorage) {
      if (window.localStorage.getItem('light')) {
        window.localStorage.removeItem('light');
        document.getElementById('style').setAttribute('href', darkStyle);
        document.getElementById('style-alt').setAttribute('href', lightStyle);
        document.getElementById("light").src="sun.jpg";
        document.querySelector(".favicon").href = "favicon.ico";
      } else {
        window.localStorage.setItem('light', true);
        document.getElementById('style').setAttribute('href', lightStyle);
        document.getElementById('style-alt').setAttribute('href', darkStyle);
        document.getElementById("light").src = "sun - light.png";
        document.querySelector(".favicon").href = "favicon-light.ico";
      }
    }
  }