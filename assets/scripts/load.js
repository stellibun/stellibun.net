path = window.location.pathname!=="/"?window.location.pathname:"/home/";

document.title = "Stellibun - "+path[1].toUpperCase()+path.substring(2,path.length-1);

document.characterSet = "UTF-8";

// Stylesheets
let mainCSS = document.createElement("link"); mainCSS.rel = "stylesheet"; mainCSS.href = "/assets/css/main.css";
let silkCSS = document.createElement("link"); silkCSS.rel = "stylesheet"; silkCSS.href = "/assets/css/silk.css";

document.head.appendChild(mainCSS);
document.head.appendChild(silkCSS);

function createNav(text,to){
    let e = document.createElement("a");
    e.className = "navButton";
    e.text = text;
    e.href = to;
    document.getElementById("navigation").appendChild(e);
}

function navButtons(){
    createNav("Home","/");
}

document.onload = function(){navButtons()};