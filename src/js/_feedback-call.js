const feedbackCall = document.querySelector('.feedback-call');
const clickCall = document.querySelectorAll('.icons-service__call');
const closeFeedback = document.querySelectorAll('.feedback-forms__button')
const cps = document.querySelector('.cps-content');

clickCall.forEach(function(btn) {
    btn.addEventListener("click", () => {
        feedbackCall.classList.add('pageBurger');
        cps.classList.add('background-menu');
    })
  })
closeFeedback.forEach(function(btn) {
    btn.addEventListener("click", () => {
        feedbackCall.classList.remove('pageBurger');
        cps.classList.remove('background-menu');
    })
  })

cps.addEventListener("click", (event) => {
  if(event.target === cps){
    feedbackCall.classList.remove('pageBurger');
    cps.classList.remove('background-menu');
  }
});

