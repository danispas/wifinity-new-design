const esimSummary = document.querySelector(
  '.w-create-account__summary-header__esim'
);

const addEsimSummary = document.querySelector(
  '.w-create-account__summary-header__add-esim'
);

const totalPriceMobile = document.querySelector('#totalPriceMobile');

const removeMobileESIM = document.querySelector('#removeMobileESIM');
const addMobileESIM = document.querySelector('#addMobileESIM');

removeMobileESIM.addEventListener('click', function () {
  esimSummary.classList.add('is-hidden');
  addEsimSummary.classList.remove('is-hidden');

  totalPriceMobile.innerHTML = '£34.49<span>/month</span>';
});

addMobileESIM.addEventListener('click', function () {
  esimSummary.classList.remove('is-hidden');
  addEsimSummary.classList.add('is-hidden');
  totalPriceMobile.innerHTML = '£49.49<span>/month</span>';
});
