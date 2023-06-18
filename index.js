const burgerIcon = document.querySelector("#burgerIcon");
const line1 = document.querySelector(".line:nth-child(1)");
const line2 = document.querySelector(".line:nth-child(2)");
const line3 = document.querySelector(".line:nth-child(3)");
const header = document.getElementById("nav");
const navMobileContainer = document.getElementById("navMobile");

const heroTitleContainer = document.getElementById('heroTitleContainer');

const heroSection = document.querySelector("#hero");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroSecondSubtitle = document.getElementById("heroSecondSubtitle");
const heroLine1 = document.getElementById("herolineLeft");
const heroLine2 = document.getElementById("herolineRight");
const heroBtn = document.getElementById("heroBtn");

const historySection = document.querySelector("#historia");

const productsSection = document.getElementById('productos');

const tortaImagenContainer = document.getElementById('tortaImageContainer');

const cupcakesSection = document.getElementById('cupcakesSection');
const cupcakesImageContainer = document.getElementById('cupcakesImageContainer');

const footerContainer = document.getElementById('footer');

const bulletsContainer = document.getElementById('bulletsContainer');
const circle = document.getElementById('circle');
const firstBullet = document.getElementById('firstBullet');
const secondBullet = document.getElementById('secondBullet');
const thirdBullet = document.getElementById('thirdBullet');

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > prevScrollPos) {
    let opacity = 1 - scrollPosition / window.innerHeight;
    if (opacity < 0) {
      opacity = 0;
    }
    heroTitleContainer.style.opacity = opacity.toString();
  } else {
    let opacity = 1 - scrollPosition / window.innerHeight;
    heroTitleContainer.style.opacity = opacity.toString();
  }

  prevScrollPos = scrollPosition;
  
  //condicionales para agregar animación mientras haya scroll
  if (window.pageYOffset <= historySection.offsetTop && window.pageYOffset <= Math.round(window.innerHeight / 2)) { // animación de los bullets en la sección hero
    console.log('inicio');
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
  circle.style.backgroundColor = 'var(--third-color)';
  }

  if (window.pageYOffset > historySection.offsetTop / 2 && scrollPosition <= productsSection.offsetTop - Math.round(window.innerHeight / 2)) { //animación de retroceso a la sección historia
    console.log('historia');
    firstBullet.style.border = '2px solid var(--fourth-color)';
    secondBullet.style.border = '2px solid var(--fourth-color)';
    thirdBullet.style.border = '2px solid var(--fourth-color)';
    circle.style.backgroundColor = 'var(--fourth-color)';
    if (circle.style.animation === '0.5s ease-in-out 0s 1 normal forwards running bullet-animation-1' || circle.style.animation === '0.5s ease-in-out 0s 1 normal forwards running bullet-animation-4') {
      circle.style.animation = 'bullet-animation-5 .5s ease-in-out forwards';
    }
  }

  //animación de transición a la imagen de la sección productos
  if(scrollPosition >= productsSection.offsetTop - Math.round(window.innerHeight / 2) && scrollPosition <= productsSection.offsetTop) {
    console.log('imagen');
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
    circle.style.backgroundColor = 'var(--third-color)';
      if (circle.style.animation === '' || circle.style.animation === '0.5s ease-in-out 0s 1 normal forwards running bullet-animation-5') {
        circle.style.animation = 'bullet-animation-1 .5s ease-in-out forwards';
      }
  } 
  //cambia de color al entrar al fondo blanco de la sección productos:
  if (Math.ceil(window.pageYOffset)  >= productsSection.offsetTop && scrollPosition <= cupcakesSection.offsetTop - window.innerHeight / 2) {
    console.log('productos');
    firstBullet.style.border = '2px solid var(--fourth-color)';
    secondBullet.style.border = '2px solid var(--fourth-color)';
    thirdBullet.style.border = '2px solid var(--fourth-color)';
    circle.style.backgroundColor = 'var(--fourth-color)';
    
    if (circle.style.animation === '0.5s ease-in-out 0s 1 normal forwards running bullet-animation-2') {
      circle.style.animation = 'bullet-animation-4 .5s ease-in-out forwards';
    }
  }
  //transición a la imagen de la sección cupcakes:
  if (Math.ceil(window.pageYOffset)
  >= cupcakesSection.offsetTop - Math.round(window.innerHeight / 2) && scrollPosition <= cupcakesSection.offsetTop) {
    console.log('cupcakes image');
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
    circle.style.backgroundColor = 'var(--third-color)';
    circle.style.animation = 'bullet-animation-2 .5s ease-in-out forwards';
  }

  if(Math.ceil(window.pageYOffset)
  >= cupcakesSection.offsetTop) {
    firstBullet.style.border = '2px solid var(--fourth-color)';
    secondBullet.style.border = '2px solid var(--fourth-color)';
    thirdBullet.style.border = '2px solid var(--fourth-color)';
    circle.style.backgroundColor = 'var(--fourth-color)';
    if (circle.style.animation === '') {
      circle.style.animation = 'bullet-animation-2 .5s ease-in-out forwards';
    }
  }

  if(Math.ceil(window.pageYOffset) + window.innerHeight / 2
  >= footerContainer.offsetTop - bulletsContainer.getBoundingClientRect().height / 2) {
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
    circle.style.backgroundColor = 'var(--third-color)';
  }

});

const links = document.querySelectorAll('a[href^="#"]');
// Agregar un evento de clic a cada enlace
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Función para realizar el scroll suave
function smoothScroll(event) {
  event.preventDefault();
  burgerIcon.classList.remove('active');
  navMobileContainer.classList.remove('active');

  const targetId = this.getAttribute("href"); // Obtener el ID del elemento de destino
  const historySection = document.querySelector(targetId); // Obtener el elemento de destino

  if (historySection) {
    window.scrollTo({
      top: historySection.offsetTop,
      behavior: "smooth", // Hacer el desplazamiento suave
    });
  }
}

const main = document.getElementById("main");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navMobileContainer.classList.toggle("active");
});

// firstBullet.addEventListener('click', bulletsTransition);
// secondBullet.addEventListener('click', bulletsTransition);
// thirdBullet.addEventListener('click', bulletsTransition);

// // function bulletsTransition() {

// //   const bulletId = this.getAttribute('id');
// //   const circlePosition = circle.getBoundingClientRect();

// //   if (bulletId === 'secondBullet' && circlePosition.top === 497.5) {
// //       circle.style.animation = 'bullet-animation-1 .5s ease-in-out forwards';
// //   } else if (bulletId === 'secondBullet' && circlePosition.top === 553.5) {
// //     circle.style.animation = 'bullet-animation-4 .5s ease-in-out forwards';    
// //   } else if (bulletId === 'thirdBullet' && circlePosition.top === 525.5) {
// //     circle.style.animation = 'bullet-animation-2 .5s ease-in-out forwards';
// //   } else if (bulletId === 'thirdBullet' && circlePosition.top === 497.5) {
// //     circle.style.animation = 'bullet-animation-3 .5s ease-in-out forwards'; 
// //   } else if (bulletId === 'firstBullet' && circlePosition.top === 525.5) {
// //     circle.style.animation = 'bullet-animation-5 .5s ease-in-out forwards'; 
// //   } else if (bulletId === 'firstBullet' && circlePosition.top === 553.5) {
// //     circle.style.animation = 'bullet-animation-6 .5s ease-in-out forwards'; 
// //   }
// // }