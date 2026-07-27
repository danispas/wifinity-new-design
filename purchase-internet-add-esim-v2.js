const esimSummary = document.querySelector('.w-plan-summary__esim');
const billingCycle = '<span class="w-plan-price__row-cycle">/month</span>';

document
  .querySelectorAll('.w-plan-simple-card__add-button')
  .forEach(function (button) {
    button.addEventListener('click', function () {
      this.closest('.w-plan-simple-card')
        .classList.add('w-plan-simple-card--active');

      esimSummary.classList.add(
        'w-plan-summary__esim--visible'
      );

      document.getElementById(
        'totalPrice'
      ).innerHTML = '£49.99' + billingCycle;
    })
  });

document
  .querySelectorAll('.w-plan-simple-card__remove-button')
  .forEach(function (button) {
    button.addEventListener('click', function () {
      this.closest('.w-plan-simple-card')
        .classList.remove('w-plan-simple-card--active');

      esimSummary.classList.remove(
        'w-plan-summary__esim--visible'
      );

      document.getElementById(
        'totalPrice'
      ).innerHTML = '£34.99' + billingCycle;
    })
  });