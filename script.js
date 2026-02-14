const carousel = document.querySelector('.carousel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let scrollAmount = 0;

function getScrollStep() {
  const firstImage = carousel.querySelector('img');
  return firstImage.clientWidth + 20; // largura + margem
}

next.addEventListener('click', () => {
  const scrollStep = getScrollStep();
  scrollAmount += scrollStep;

  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0; // volta pro início
  }

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prev.addEventListener('click', () => {
  const scrollStep = getScrollStep();
  scrollAmount -= scrollStep;

  if (scrollAmount < 0) {
    scrollAmount = carousel.scrollWidth - carousel.clientWidth;
  }

  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
