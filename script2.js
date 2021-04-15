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

// 1. Creating object for local storage
let userPreferences = {
  light : function() {
    if(document.querySelector(".theme-link#style").href == "styles-light.css") {
      return true;
    } else {
      return false;
    }
  }
}

// 2. Serializing the object
let userPreferences_serialized = JSON.stringify(userPreferences);

// 3. Store in localStorage as key:value pair
localStorage.setItem("light", userPreferences_serialized);

// 4. Deserialize the object before using it
let userPreferences_deserialized = JSON.parse(localStorage.getItem("light"));

console.log(userPreferences_deserialized);


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