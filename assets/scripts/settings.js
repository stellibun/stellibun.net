function createCategory(category,settings){
    let e = document.createElement("h1");
    e.innerText = category;
    e.style = "margin-left: 0;";

    let b = document.createElement("line");

    document.getElementById("settings").appendChild(e);
    document.getElementById("settings").appendChild(b);

    for(var i=0;i<settings.length;i++){
        console.log(settings[i]);
    }
}

function loadSettings(){
    createCategory("Display",["Theme"]);
}