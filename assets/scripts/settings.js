function createCategory(text,settings){
    let e = document.createElement("h1");
    e.text = text;
    e.style = "margin-left: 0;";

    let b = document.createElement("line");

    document.getElementById("settings").appendChild(e);
    document.getElementById("settings").appendChild(b);

    for(var i=0;i<settings.length-1;i++){
        console.log(settings[i]);
    }
}

function settings(){
    createCategory("Display",["Theme"]);
}