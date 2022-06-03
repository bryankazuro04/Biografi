AOS.init({
  duration: 1000,
});

gsap.to(".jumbotron h2", {
  duration: 2,
  text: "Selamat Datang",
  ease: "none",
});

const btnSecret = document.querySelector(".secret");
const msgSecret = document.querySelector(".secret_message");

btnSecret.addEventListener("click", () => {
  msgSecret.classList.toggle("visible");
});
