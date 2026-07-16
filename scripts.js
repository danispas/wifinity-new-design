const benefits = document.querySelectorAll(
  '.w-plan-benefits-rotator__text > span'
);

let currentBenefit = 0;

if (benefits.length > 0) {
  setInterval(() => {
    benefits[currentBenefit].classList.remove('is-active');
  
    currentBenefit = (currentBenefit + 1) % benefits.length;
  
    benefits[currentBenefit].classList.add('is-active');
  }, 4000);
}
