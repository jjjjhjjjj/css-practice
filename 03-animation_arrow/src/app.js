const circle = document.querySelector('.circle');
const upBtn = document.querySelector('.up-btn');
const dowmBtn = document.querySelector('.dowm-btn');

let angle = 0;

function changeAngle(type) {
  if (type === 'up') {
    angle += 90;
  } else if (type === 'down') {
    angle -= 90;
  }

  circle.style.transform = `rotate(${angle}deg)`;
}

upBtn.addEventListener('click', () => changeAngle('up'));
dowmBtn.addEventListener('click', () => changeAngle('down'));
