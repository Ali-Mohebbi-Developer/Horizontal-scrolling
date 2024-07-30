const arr = [
  {
    title: "Patreon",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e82549c3ce5158191e84_purple3.png",
  },
  {
    title: "Dribble",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e83f39357d156821c123_purple.png",
  },
  {
    title: "Wizardry",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e856ebc5d16767529ffd_purple2-p-500.png",
  },
  {
    title: "YouTube",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e871ca8f27b48f686dce_purple4-p-500.png",
  },
  {
    title: "Instagram",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e88f84c6fc7cfaddf7c9_purple5-p-500.png",
  },
  {
    title: "Website",
    src: "https://assets.website-files.com/60b2e7b48214316be9ee31d9/60b2e8abbe857957e0bb05d3_purple6-p-500.png",
  },
];

const sticky = document.querySelector(".sticky");
const scroll = document.querySelector(".scroll");

arr.forEach((item) => {
  const div = document.createElement("div");
  const figure1 = document.createElement("figure");
  const figcaption = document.createElement("figcaption");
  const img1 = document.createElement("img");
  img1.src =
    "https://assets.website-files.com/60b2e7b48214310b2bee31d0/60b2e7b48214317099ee31e2_shape.svg";
  figure1.appendChild(figcaption);
  figure1.appendChild(img1);
  div.appendChild(figure1);
  figcaption.innerText = item.title;

  const figure2 = document.createElement("figure");
  const img2 = document.createElement("img");

  img2.src = item.src;
  figure2.appendChild(img2);
  div.appendChild(figure2);

  scroll.appendChild(div);
});

window.addEventListener("scroll", () => {
  transform(sticky);
});

function transform(e) {
  const y = e.parentElement.offsetTop;

  let percent = ((window.scrollY - y) / window.innerHeight) * 50;
  percent = percent < 0 ? 0 : percent > 80 ? 80 : percent;
  scroll.style.transform = `translate3d(${-percent}vw , 0 , 0)`;
}
