let sky = document.querySelector('.sky');
function newSky(size) {
  let star = document.createElement('div');
  star.classList.add('star');
  let rang = Math.floor(Math.random() * (10 - 1)) + 1;
  star.classList.add(`blink_${rang}`);
    let d = RandomNum(size, 'px');
  star.style.height = star.style.width = d;
    star.style.left = RandomNum(window.innerWidth, 'px');
  star.style.top = RandomNum(window.innerHeight, 'px');
  sky.appendChild(star);
}
let [starSlider, sizeSlider] = document.querySelectorAll('.slider');
let [stars, size] = document.querySelectorAll('.valor');
[starSlider, sizeSlider].forEach(slider => {
  slider.addEventListener('change', () => {
    stars.textContent = starSlider.value;
    size.textContent = sizeSlider.value;
  });
  slider.addEventListener('change', () => {
    PaintStars(starSlider.value, sizeSlider.value);
  });
});
function PaintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    newSky(size);
  }
}
function RandomNum(range, unit) {
  let Number = Math.floor(Math.random() * range) + 1;
  return `${Number}${unit}`;
}
PaintStars(50, 5);

