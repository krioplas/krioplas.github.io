const menuClick = document.querySelector('.header__burger');
const pageFeedback = document.querySelector('.page-burger');
const closeBurger = document.querySelector('.logo-burger__back');
const cps = document.querySelector('.cps-content');

menuClick.addEventListener("click", () => {
  pageFeedback.classList.add('pageBurger');
  cps.classList.add('background-menu');
  });
closeBurger.addEventListener("click", () => {
  pageFeedback.classList.remove('pageBurger');
  cps.classList.remove('background-menu');
});


cps.addEventListener("click", (event) => {
  if(event.target === cps){
    pageFeedback.classList.remove('pageBurger');
    cps.classList.remove('background-menu');
  }
});
