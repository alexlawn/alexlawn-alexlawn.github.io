// Select the button
const buttonLight = document.getElementById("light");
const buttonDark = document.getElementById("dark");

// Select the stylesheet <link>
const theme = document.querySelector(".theme-link");

// Listen for a click on the sun (light) button
buttonLight.addEventListener("click", function() {
    theme.href = "styles-light.css";
    // different sun for light theme
    document.getElementById("light").src="sun - light.png";
  });

// Listen for a click on the moon (dark) button
buttonDark.addEventListener("click", function() {
    theme.href = "styles-dark.css";
    // different sun for dark theme
    document.getElementById("light").src="sun.jpg";
  });


// Remember user theme selection
