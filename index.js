const burgerIcon = document.querySelector('#burgerIcon');
const line1 = document.querySelector('.line:nth-child(1)');
const line2 = document.querySelector('.line:nth-child(2)');
const line3 = document.querySelector('.line:nth-child(3)');
const header = document.getElementById('nav');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  header.classList.toggle('translate');

  // if (burgerIcon.classList.contains('active')) {
   
  //   // line1.style.transform = 'none';
  //   // line2.style.opacity = '1';
  //   // line3.style.transform = 'none';
  //   // line1.style.transform = 'translateY(4px) rotate(45deg)';
  //   // line2.style.opacity = '0';
  //   // line3.style.transform = 'translateY(-10px) rotate(-45deg)';
  // }
})

