
 function Familia(){
    var Seleccionar = document.getElementsByTagName("select")[0];
    var Families = ["Material Escolar", "Eines", "Pintura","Joguines"];
    Families = Families.sort();
    Families.forEach(Elements =>{
        var Opcions = document.createElement("option");
        Opcions.innerHTML = Elements;
        Seleccionar.appendChild(Opcions);
    });
}
window.onload = function inici(){
    Familia();
    var amp = Array.from(document.getElementsByClassName("amplada"));
    amp.forEach(element => element.addEventListener("change", function(){
        amplada(amp);
    }));
    var all = Array.from(document.getElementsByClassName("allergada"));
    all.forEach(element => element.addEventListener("change", function(){
        allergada(all);
    }));

    var alt = Array.from(document.getElementsByClassName("altura"));
    alt.forEach(element => element.addEventListener("change", function(){
        altura(alt);
    
        
    }));
    var p = Array.from(document.getElementsByName("estanteria"));
    p.forEach(element => element.addEventListener("change", function(){
        passedis(p);
    }));
    var est = Array.from(document.getElementsByName("estanteria"));
    est.forEach(element => element.addEventListener("change", function(){
        estanteria(est);
    }));
    var f = Array.from(document.getElementsByName("forat"));
    f.forEach(element => element.addEventListener("change", function(){
        passedis(f);
    }));
    
}
 



function amplada(amp){
    var Amplada = /^15$/;
    var Validar = Amplada.test(amp);
    var Fotografia = amp.nextElementSibling;
    if (Validar = true){
        Fotografia.src = "Light_green_check.png";
        
    }
}

function allergada(all){
    var Allergada = /^15$/;
    var Validar = Allergada.test(allergada);
    var Fotografia = all.nextElementSibling;
    if (Validar = true){
        Fotografia.src = "Light_green_check.png";
        
    }
    
}
 function altura(alt){
 
  var  Altura = /^20$/;
    var Validar = Altura.test(altura);
    var Fotografia = alt.nextElementSibling;
    if (Validar = true){
        Fotografia.src = "Light_green_check.png";
        
    }
    
    
}


function passedis(p){
    
var passedis = /[P]?-[0-9]{2}-[D-E]{1}$/;
var Validar = passedis.test(Passedis);
var Fotografia = p.nextElementSibling;
    if (Validar = true){
        Fotografia.src = "Light_green_check.png";
        
    }
    
    
  
    
}


 function estanteria(est){
    var Estanteria = /^EST[\+]?[0-9]{2}[\.]?[0-9]{2}$/;
var Validar = Estanteria.test(estanteria);
var Fotografia = est.nextElementSibling;
    if (Validar = true){
        Fotografia.src = "Light_green_check.png";
        
    }
}
function forat(f){
    var Forat = /^[0-9]{2}[\ ][a-z||A-Z]{3}[\ ][0-9]{2}[\\][0-9]{2}$/;
    var Validar = Forat.test(forat);
    var Fotografia = f.nextElementSibling;
        if (Validar = true){
            Fotografia.src = "Light_green_check.png";
            
        }

}


