let Français = document.getElementById("Français");
let english = document.getElementById("english");
let arabic = document.getElementById("arabic");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

Français.onclick = ()=>{
    setLanugage("Français");
    localStorage.setItem("lang","Français");
}

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("lang","english");
}

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("lang","arabic");
}

onload = ()=>{
    setLanugage(localStorage.getItem("lang"));
};

function setLanugage(getLanuge){
    if(getLanuge === "Français"){
        title.innerHTML = "Bienvenue au restaurant Zouhair";
        welcome.innerHTML = "Bienvenue sur le site du restaurant Zouhair";
        about.innerHTML = "à propos de nous";
        aboutText.innerHTML = "Bienvenue au restaurant Zouhair";
        contact.innerHTML = "Contactez-nous";
    }else if(getLanuge === "english"){
        title.innerHTML = "Welcome to Zouhair Restaurant";
        welcome.innerHTML = "Bienvenue sur le site du restaurant Zouhair";
        about.innerHTML = "About US";
        aboutText.innerHTML = "Welcome to Zouhair Restaurant";
        contact.innerHTML = "Contact US";
    }else if(getLanuge === "arabic"){
        title.innerHTML = "مرحبا بك في مطعم زهير";
        welcome.innerHTML = "مرحبا بكم في موقع مطعم زهير";
        about.innerHTML = "حولنا";
        aboutText.innerHTML = "مرحبا بكم في مطعم زهير";
        contact.innerHTML = "اتصل بنا";
    }
}