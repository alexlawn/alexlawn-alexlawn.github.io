// Button selection
const buttonLight = document.getElementById("light");
const buttonDark = document.getElementById("dark");

// Style selection
const lightStyle = "styles-light.css";
const darkStyle = "styles-dark.css";

// Select the stylesheet <link>
const theme = document.querySelector(".theme-link");

// Listen for a click on the sun button (buttonLight)
buttonLight.addEventListener("click", function() {
    theme.href = lightStyle;
    // different sun for light theme
    document.getElementById("light").src = "sun - light.png";
    document.querySelector(".favicon").href = "favicon-light.ico";
  });

// Listen for a click on the moon button (buttonDark)
buttonDark.addEventListener("click", function() {
    theme.href = darkStyle;
    // different sun for dark theme
    document.getElementById("light").src="sun.jpg";
    document.querySelector(".favicon").href = "favicon.ico";
  });