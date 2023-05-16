const click = document.querySelectorAll('.icons-service__chat');
const closeFeedback = document.querySelectorAll('.feedback-forms__button');
const feedback = document.querySelector('.feedback');
const cps = document.querySelector('.cps-content');


click.forEach(function(btn) {
  btn.addEventListener("click", () => {
      feedback.classList.add('pageBurger');
      cps.classList.add('background-menu');
  })
})

closeFeedback.forEach(function(btn) {
    btn.addEventListener("click", () => {
      feedback.classList.remove('pageBurger');
        cps.classList.remove('background-menu');
    })
  })
  cps.addEventListener("click", (event) => {
    if(event.target === cps){
      feedback.classList.remove('pageBurger');
      cps.classList.remove('background-menu');
    }
  });