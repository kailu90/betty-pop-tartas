const burgerIcon = document.querySelector('#burgerIcon');
const line1 = document.querySelector('.line:nth-child(1)');
const line2 = document.querySelector('.line:nth-child(2)');
const line3 = document.querySelector('.line:nth-child(3)');
const header = document.getElementById('nav');
const navMobileContainer = document.getElementById('navMobile');

window.onload = function () {
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroSecondSubtitle = document.getElementById('heroSecondSubtitle');
    const heroLine1 = document.getElementById('herolineLeft');
    const heroLine2 = document.getElementById('herolineRight');
    const heroBtn = document.getElementById('heroBtn');

    heroTitle.classList.add('title-animation');
    heroSubtitle.classList.add('subtitle-animation');
    
    heroLine1.classList.add('line-left-on-load');
    heroLine2.classList.add('line-right-on-load');
    
    heroSecondSubtitle.classList.add('second-subtitle-animation');
    heroBtn.classList.add('hero-btn--animation');

} 

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    navMobileContainer.classList.toggle('active');
});
