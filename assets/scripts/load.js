path = window.location.pathname.split("/"); path = path[path.length-2]; path = path != ""?path:"home";

document.title = "Stellibun - "+path[0].toUpperCase()+path.substring(1,path.length-1);

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
    createNav("Games","/games");
    createNav("Art","/art");
    createNav("Blog","/blog");
    createNav("Links","/links");
}

fetch("https://status.cafe/users/stellibun/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet.";
      return;
    }
    document.getElementById("statuscafe-username").innerHTML = "<span class=\"famfamfam-silk "+r.face+"\" style=\"top: 2px;position: relative;\"></span> / Stellibun <small>"+r.timeAgo+"</small>";
    document.getElementById("statuscafe-content").innerHTML = r.content;
})