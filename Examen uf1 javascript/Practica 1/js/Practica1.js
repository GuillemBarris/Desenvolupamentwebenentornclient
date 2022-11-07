window.onload = function start(){
    Localitzacio();
    doucment.getElementById("Codi").onchange = validarCodi();
}

function Localitzacio(){
    var opcions = ["Olot","Girona","Barcelona","Joanetes","Amer"];
    opcions.sort();
    var desplegable = document.getElementById("Localitzacio");
    for (var i = 0; i < opcions.length; i++) {
        var opt = document.createElement("option");
        opt.value = opcions[i];
        opt.innerHTML = opcions[i];
        desplegable.appendChild(opt);
    }

}
function validarCodi(){
    
    for (var i = 0; i < opcions.length; i++) {
        var opt = document.createElement("option");
        opt.value = opcions[i];
        opt.innerHTML = opcions[i];
        desplegable.appendChild(opt);
    }
    if (splitCodi.length == 5 && splitCodi[0].toLowerCase() == splitdesplegable.toLowerCase() && new RegExp(/^[0-9]{3}$/).test(splitCodi[1])) {
        var codiNum = Number(sumStrNum(splitCodi[1]) % 10);
        var lletres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        if (lletres[codiNum] == splitCodi[2]) {
            document.getElementsByTagName('img')[0].src = "img/tick.png";
            return true;
        }
    }
    document.getElementsByTagName('img')[0].src = "img/cross.png";
    return false;

}
