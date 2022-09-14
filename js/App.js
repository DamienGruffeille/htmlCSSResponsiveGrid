// const allRonds = document.querySelectorAll('.rond');
// const allBoxes = document.querySelectorAll('.box');

// const controller = new ScrollMagic.Controller()

// allBoxes.forEach(box => {

//     for (i = 0; i < allRonds.length; i++) {

//         if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

//             let tween = gsap.from(box,{y: -50, opacity: 0, duration: 0.5})

//             let scene = new ScrollMagic.Scene({
//                 triggerElement: allRonds[i];
//                 reverse: false
//             })
//             .setTween(tween)
//             .addIndicators()
//             .addTo(controller)
//         }
//     }

// })

const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector("right");
const precedent = document.querySelector("left");
let count = 0;

function slideSuivante() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  consol.log(count);
}
suivante.addEventListener("click", slideSuivante);
