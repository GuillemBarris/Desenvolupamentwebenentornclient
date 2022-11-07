let sky = document.querySelector('.cel');
function Div(size) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    let randRange5 = Math.floor(Math.random() * 5) + 1;
    circle.classList.add(`blink_${randRange5}`);
    let widthAndHeight = Aleatori(size, 'px');
    circle.style.backgroundColor = ColorHEX();
    circle.style.height = circle.style.width = widthAndHeight;
    circle.style.left = Aleatori(window.innerWidth, 'px');
    circle.style.top = Aleatori(window.innerHeight, 'px');
    circle.style.opacity = Math.random();
    sky.appendChild(circle);
   
}
let [starSlider] = document.querySelectorAll('.slider');
starSlider.value = localStorage.getItem("num");

let size = localStorage.getItem("diametre");
starSlider.addEventListener('change', () => {
    CrearEstrelles(starSlider.value, size);
    localStorage.setItem("num", starSlider.value)
});
function CrearEstrelles(stars, size) {
    while (sky.firstChild) {
        sky.removeChild(sky.firstChild);
    }
    for (let i = 0; i < stars; i++) {
        Div(size);
    }
}
function Aleatori(range, unit) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
}
CrearEstrelles(starSlider.value, size);
function ColorHEX(){
    var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
   return color;

}

