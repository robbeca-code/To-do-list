const imgs = ['avenue.jpg', 'flowers.jpg', 'lake.jpg', 'river.jpg', 'seljalandsfoss.jpg'];

const BG = 'background';
const chooseImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement('img');
bgImage.className = BG;

bgImage.src = `img/${chooseImg}`;

document.body.appendChild(bgImage);