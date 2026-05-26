let setts;

function createSetting(name,parent,def){
    let d = document.createElement("div");
    d.className = "setting";
    
    let n = document.createElement("p");
    n.textContent = name;

    let li = document.createElement("line");

    let l = document.createElement("label");
    l.className = "switch";

    let c = document.createElement("input");
    c.type = "checkbox";
    if(def){c.checked = true;}

    let s = document.createElement("span");
    s.className = "slider";

    parent.appendChild(d);

    d.appendChild(n);
    d.appendChild(li);
    d.appendChild(l);

    l.appendChild(c);
    l.appendChild(s);

    c.addEventListener("change", function() {
        localStorage.setItem(name,this.checked);
    });

    localStorage.setItem(name,c.checked);
}

function createCategory(category,settings){
    let e = document.createElement("h1");
    e.innerText = category;
    e.style = "margin-left: 0; margin-bottom:0;";

    let b = document.createElement("line");

    setts.appendChild(e);
    setts.appendChild(b);

    for(var i=0;i<settings.length;i++){
        createSetting(settings[i].name,setts,settings[i].default);
    }
}

function loadSettings(){
    setts = document.getElementById("settings");

    createCategory("Display",[
        {name:"Dark Theme",default:false},
    ]);
}