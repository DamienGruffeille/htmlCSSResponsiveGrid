const items = document.querySelectorAll("p.active, p.element");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

const allRonds = document.querySelectorAll(".rond");
const allBoxes = document.querySelectorAll(".box");

const controller = new ScrollMagic.Controller();

allBoxes.forEach((box) => {
  for (const element of allRonds) {
    if (element.getAttribute("data-anim") === box.getAttribute("data-anim")) {
      let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 });

      let scene = new ScrollMagic.Scene({
        triggerElement: element,
        reverse: false,
      })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);
    }
  }
});

function slideSuivante() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
}
precedent.addEventListener("click", slidePrecedente);

function keyPress(e) {
  console.log(e);

  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
}
document.addEventListener("keydown", keyPress);

const tabs = [...document.querySelectorAll(".tab")];

tabs.forEach((tab) => tab.addEventListener("click", tabsAnimation));

function tabsAnimation(e) {
  const tabContents = [...document.querySelectorAll(".tab-content")];

  /* Je trouve l'index du tab qui possède la classe "active-tab"*/
  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains("active-tab")
  );

  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  /* le click définit l'objet qu'on veut rendre actif */
  const indexToShow = tabs.indexOf(e.target);

  tabs[indexToShow].classList.add("active-tab");
  tabContents[indexToShow].classList.add("active-tab-content");
}
