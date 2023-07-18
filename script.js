const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

if (nav) {
  menu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
