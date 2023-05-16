
import Swiper from '../../node_modules/swiper/swiper-bundle.min';


const width = window.matchMedia('(max-width: 768px)');
if(width.matches) {
  new Swiper('.swiper', {
    slidesPerView: 1.29,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const infoButton = document.querySelector('.info-text__button');
const contain = document.querySelector('.info-text-cont');

infoButton.addEventListener("click", () => {
    let lor = contain.classList.contains('info-text-cont--active');
    if (lor) {
      contain.classList.remove('info-text-cont--active');
      infoButton.classList.remove('info-text__button--active');
      infoButton.textContent = "Читать далее";
    } else {
      contain.classList.add('info-text-cont--active');
      infoButton.classList.add('info-text__button--active');
      infoButton.textContent = "Скрыть";
    }
  });



const button = document.querySelector('.more-button');
const swiper = document.querySelector('.swiper-wrapper');

button.addEventListener("click", () => {
    let lor = swiper.classList.contains('swiper-button-active');
    if (lor) {
      swiper.classList.remove('swiper-button-active');
      button.classList.remove('more-button-active');
      button.textContent = "Показать все";
    } else {
      swiper.classList.add('swiper-button-active');
      button.classList.add('more-button-active');
      button.textContent = "Скрыть";

    }
  });


  const buttonType = document.querySelector('.more-button--type');
  const swiperType = document.querySelector('.swiper-block-repair');
  
  buttonType.addEventListener("click", () => {
      let lor = swiperType.classList.contains('swiper-button-active');
      if (lor) {
        swiperType.classList.remove('swiper-button-active');
        buttonType.classList.remove('more-button-active');
        buttonType.textContent = "Показать все";
      } else {
        swiperType.classList.add('swiper-button-active');
        buttonType.classList.add('more-button-active');
        buttonType.textContent = "Скрыть";
  
      }
    });























// import Swiper from 'swiper/bundle';

// const width = window.matchMedia('(max-width: 768px)');



// if(width.matches){
//     const swiper = new Swiper('.swiper', {
//     slidesPerView: 1.35,
//     spaceBetween: 40,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });
// }
// else{
//     document.styleSheets[2].disabled = true;
// }


// // const button = document.querySelector('.more-button');
// // const swiper = document.querySelector('.swiper-wrapper');
// // const linkText = document.querySelector('.link-text');
// //     button.addEventListener("click", () => {
// //         let lor = swiper.classList.contains('swiper-button-active');
// //         if(lor) {
// //             swiper.classList.remove('swiper-button-active');
// //             button.classList.remove('more-button-active');
// //             linkText.textContent = "Показать все";
// //         }
// //         else{
// //             swiper.classList.add('swiper-button-active');
// //             button.classList.add('more-button-active');
// //             linkText.textContent = "Скрыть";

// //         }});



