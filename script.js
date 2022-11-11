const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const buttonContainer = document.querySelector('.buttons-container');
const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseover', () => {
  buttonContainer.style.opacity = 1;
});

imageContainer.addEventListener('mouseout', () => {
  buttonContainer.style.opacity = 0;
});

buttonContainer.addEventListener('mouseover', () => {
  buttonContainer.style.opacity = 1;
});

buttonContainer.addEventListener('mouseout', () => {
  buttonContainer.style.opacity = 0;
});

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
});
