const burgerIcon = document.querySelector("#burgerIcon");
const line1 = document.querySelector(".line:nth-child(1)");
const line2 = document.querySelector(".line:nth-child(2)");
const line3 = document.querySelector(".line:nth-child(3)");
const header = document.getElementById("nav");
const navMobileContainer = document.getElementById("navMobile");

const heroTitleContainer = document.getElementById('heroTitleContainer');

const sectionHero = document.querySelector("#hero");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroSecondSubtitle = document.getElementById("heroSecondSubtitle");
const heroLine1 = document.getElementById("herolineLeft");
const heroLine2 = document.getElementById("herolineRight");
const heroBtn = document.getElementById("heroBtn");

const historySection = document.querySelector("#historia");

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

  if (scrollPosition >= 1) {
    bulletsAnimation(scrollPosition);
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

const burgerLine1 = document.getElementById('#burgerLine1');
const burgerLine3 = document.getElementById('#burgerLine3');

const backgroundColor = getComputedStyle(historySection).backgroundColor;


const productsSection = document.getElementById('productos');
const footerContainer = document.getElementById('footer');

const circle = document.getElementById('circle');
const firstBullet = document.getElementById('firstBullet');
const secondBullet = document.getElementById('secondBullet');
const thirdBullet = document.getElementById('thirdBullet');

//función para darle animación a los bullets
function bulletsAnimation(windowPosition) {
  const heroSectionRect = sectionHero.getBoundingClientRect();
  const historySectionRect = historySection.getBoundingClientRect();
  const productsSectionRect = productsSection.getBoundingClientRect();
  const footerSectionRect = footerContainer.getBoundingClientRect();


  if (windowPosition >= heroSectionRect.bottom && windowPosition < historySectionRect.bottom) {
    firstBullet.style.border = '2px solid var(--fourth-color)';
    secondBullet.style.border = '2px solid var(--fourth-color)';
    thirdBullet.style.border = '2px solid var(--fourth-color)';
  } else if (windowPosition >= historySectionRect.bottom && windowPosition < productsSectionRect.bottom) {
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
  } else if (windowPosition >= productsSectionRect.top) {
    firstBullet.style.border = '2px solid var(--fourth-color)';
    secondBullet.style.border = '2px solid var(--fourth-color)';
    thirdBullet.style.border = '2px solid var(--fourth-color)';
  } else {
    firstBullet.style.border = '2px solid var(--third-color)';
    secondBullet.style.border = '2px solid var(--third-color)';
    thirdBullet.style.border = '2px solid var(--third-color)';
  }
}


firstBullet.addEventListener('click', bulletsTransition);
secondBullet.addEventListener('click', bulletsTransition);
thirdBullet.addEventListener('click', bulletsTransition);


function bulletsTransition() {

  const bulletId = this.getAttribute('id');
  const circlePosition = circle.getBoundingClientRect();

  if (bulletId === 'secondBullet' && circlePosition.top === 497.5) {
    circle.style.animation = 'bullet-animation-1 .5s ease-in-out forwards';    
  } else if (bulletId === 'secondBullet' && circlePosition.top === 553.5) {
    circle.style.animation = 'bullet-animation-4 .5s ease-in-out forwards';    
  } else if (bulletId === 'thirdBullet' && circlePosition.top === 525.5) {
    circle.style.animation = 'bullet-animation-2 .5s ease-in-out forwards';
  } else if (bulletId === 'thirdBullet' && circlePosition.top === 497.5) {
    circle.style.animation = 'bullet-animation-3 .5s ease-in-out forwards'; 
  } else if (bulletId === 'firstBullet' && circlePosition.top === 525.5) {
    circle.style.animation = 'bullet-animation-5 .5s ease-in-out forwards'; 
  } else if (bulletId === 'firstBullet' && circlePosition.top === 553.5) {
    circle.style.animation = 'bullet-animation-6 .5s ease-in-out forwards'; 
  }
}