// Fazer scroll aparecer e desaparecer da tela em uma determinada altura
window.onscroll = function(){scroll();}

function scroll(){
    var btn = document.getElementById("topo");

    if(document.documentElement.scrollTop > 1000){
        btn.style.visibility = "visible";
    }
    else{
        btn.style.visibility = "hidden";
    }
}

