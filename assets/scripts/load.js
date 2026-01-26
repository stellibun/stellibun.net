const { createElement } = require("react");

document.title = "viskyla.net";
document.characterSet = "UTF-8";

// Stylesheets
//let mainCSS = createElement("link"); mainCSS.rel = "stylesheet"; mainCSS.href = "/assets/css/main.css";
let silkCSS = createElement("link"); silkCSS.rel = "stylesheet"; silkCSS.href = "/assets/css/silk.css";

//document.head.appendChild(mainCSS);
document.head.appendChild(silkCSS);