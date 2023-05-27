const burgerIcon = document.querySelector('#burgerIcon');
const line1 = document.querySelector('.line:nth-child(1)');
const line2 = document.querySelector('.line:nth-child(2)');
const line3 = document.querySelector('.line:nth-child(3)');
const header = document.getElementById('nav');
const navMobileContainer = document.getElementById('navMobile');


burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    navMobileContainer.classList.toggle('active');
});

