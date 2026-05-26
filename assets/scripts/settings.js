let setts;

function createSetting(name,parent){
    let d = document.createElement("div");
    d.className = "setting";
    
    let n = document.createElement("p");
    n.textContent = name;

    let l = document.createElement("label");
    l.className = "switch";

    let c = document.createElement("input");
    c.type = "checkbox";

    let s = document.createElement("span");
    s.className = "slider";

    parent.appendChild(d);

    d.appendChild(n);
    d.appendChild(l);

    l.appendChild(c);
    l.appendChild(s);
}

function createCategory(category,settings){
    let e = document.createElement("h1");
    e.innerText = category;
    e.style = "margin-left: 0;";

    let b = document.createElement("line");

    setts.appendChild(e);
    setts.appendChild(b);

    for(var i=0;i<settings.length;i++){
        console.log(settings[i]);
        createSetting(settings[i],setts);
    }
}

function loadSettings(){
    setts = document.getElementById("settings");

    createCategory("Display",["Theme"]);
}