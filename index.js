const burgerIcon = document.querySelector('#burgerIcon');
const line1 = document.querySelector('.line:nth-child(1)');
const line2 = document.querySelector('.line:nth-child(2)');
const line3 = document.querySelector('.line:nth-child(3)');
const header = document.getElementById('nav');
const navMobileContainer = document.getElementById('navMobile');

const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroSecondSubtitle = document.getElementById('heroSecondSubtitle');
    const heroLine1 = document.getElementById('herolineLeft');
    const heroLine2 = document.getElementById('herolineRight');
    const heroBtn = document.getElementById('heroBtn');

window.onload = function () {
    heroTitle.classList.add('title-animation');
    heroSubtitle.classList.add('subtitle-animation');
    
    heroLine1.classList.add('line-left-on-load');
    heroLine2.classList.add('line-right-on-load');
    
    heroSecondSubtitle.classList.add('second-subtitle-animation');
    heroBtn.classList.add('hero-btn--animation');

} 

const main = document.getElementById('main');
const sectionHistoria = document.getElementById('historia');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    navMobileContainer.classList.toggle('active');
});

// navMobileContainer.addEventListener('mouseover', () => {
//     document.body.classList.add('hovered');
// })
// navMobileContainer.addEventListener('mouseout', () => {
//     document.body.classList.remove('hovered');
// })


let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    
    if (scrollPosition > prevScrollPos) {
        let opacity = 1 - (scrollPosition / (window.innerHeight));
        if (opacity < 0) {
            opacity = 0;
        }
        heroTitle.style.opacity = opacity.toString();
        heroSubtitle.style.opacity = opacity.toString();
        heroSecondSubtitle.style.opacity = opacity.toString();
        heroLine1.style.opacity = opacity.toString();
        heroLine2.style.opacity = opacity.toString();
        heroBtn.style.opacity = opacity.toString();
    } else {
        let opacity = 1 - (scrollPosition / (window.innerHeight));
        heroTitle.style.opacity = opacity.toString();
        heroSubtitle.style.opacity = opacity.toString();
        heroSecondSubtitle.style.opacity = opacity.toString();
        heroLine1.style.opacity = opacity.toString();
        heroLine2.style.opacity = opacity.toString();
        heroBtn.style.opacity = opacity.toString();
    }

    prevScrollPos = scrollPosition;
    // const burgerLine1 = document.getElementById('burgerLine1');
    // const burgerLine2 = document.getElementById('burgerLine2');
    // const burgerLine3 = document.getElementById('burgerLine3');
    // const backgroundColor = window.getComputedStyle(sectionHistoria).backgroundColor;
    // const backgroundImage = window.getComputedStyle(sectionHistoria).backgroundImage;

    // if (backgroundImage !== 'none') {
    //     burgerLine1.style.backgroundColor = 'var(--fourth-color)';
    //     burgerLine2.style.backgroundColor = 'var(--fourth-color)';
    //     burgerLine3.style.backgroundColor = 'var(--fourth-color)';
    // } else {
    //     let rgb = backgroundColor.match(/\d+/g); // Extraer los valores RGB.
    //     let r = parseInt(rgb[0]);
    //     let g = parseInt(rgb[1]);
    //     let b = parseInt(rgb[2]);
    //     let luminosidad = (r * 0.299 + g * 0.587 + b * 0.114) / 255; //calcular la luminosidad.

    //     if (luminosidad > 0.5) {
    //         burgerLine1.style.backgroundColor = 'var(--third-color)';
    //         burgerLine2.style.backgroundColor = 'var(--third-color)';
    //         burgerLine3.style.backgroundColor = 'var(--third-color)';
    //     }
    // }
})
