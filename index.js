const burgerIcon = document.querySelector("#burgerIcon");
const line1 = document.querySelector(".line:nth-child(1)");
const line2 = document.querySelector(".line:nth-child(2)");
const line3 = document.querySelector(".line:nth-child(3)");
const header = document.getElementById("nav");
const navMobileContainer = document.getElementById("navMobile");

const sectionHero = document.querySelector("#hero");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroSecondSubtitle = document.getElementById("heroSecondSubtitle");
const heroLine1 = document.getElementById("herolineLeft");
const heroLine2 = document.getElementById("herolineRight");
const heroBtn = document.getElementById("heroBtn");

const targetElement = document.querySelector("#historia");

let prevScrollPos = window.pageYOffset;

// window.addEventListener("scroll", () => {
//   let scrollPosition = window.pageYOffset;

//   if (scrollPosition > prevScrollPos) {
//     let opacity = 1 - scrollPosition / window.innerHeight;
//     if (opacity < 0) {
//       opacity = 0;
//     }
//     heroTitle.style.opacity = opacity.toString();
//     heroSubtitle.style.opacity = opacity.toString();
//     heroSecondSubtitle.style.opacity = opacity.toString();
//     heroLine1.style.opacity = opacity.toString();
//     heroLine2.style.opacity = opacity.toString();
//     heroBtn.style.opacity = opacity.toString();
//   } else {
//     let opacity = 1 - scrollPosition / window.innerHeight;
//     heroTitle.style.opacity = opacity.toString();
//     heroSubtitle.style.opacity = opacity.toString();
//     heroSecondSubtitle.style.opacity = opacity.toString();
//     heroLine1.style.opacity = opacity.toString();
//     heroLine2.style.opacity = opacity.toString();
//     heroBtn.style.opacity = opacity.toString();
//   }

//   prevScrollPos = scrollPosition;
// });

const links = document.querySelectorAll('a[href^="#"]');

// Agregar un evento de clic a cada enlace
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Función para realizar el scroll suave
function smoothScroll(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  const targetId = this.getAttribute("href"); // Obtener el ID del elemento de destino
  const targetElement = document.querySelector(targetId); // Obtener el elemento de destino

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth", // Hacer el desplazamiento suave
    });
  }
}


const main = document.getElementById("main");
const sectionHistoria = document.getElementById("historia");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navMobileContainer.classList.toggle("active");
});
