const images = [
  "img/0.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
]
const body = document.querySelector("body");

const randomImage = images[Math.floor(Math.random() * images.length)]

const backgroundImage = document.createElement("img");

backgroundImage.src = `${randomImage}`;

backgroundImage.classList.add("fullImage")

body.appendChild(backgroundImage);
