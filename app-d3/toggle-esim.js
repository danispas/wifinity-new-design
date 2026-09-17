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

const moreInfoModal = document.getElementById('moreInfoModal');
const openMoreInfoButton = document.getElementById('openMoreInfoModal');
const closeMoreInfoButton = document.getElementById('closeMoreInfoModal');

const overlay = moreInfoModal.querySelector('.w-full-screen-modal__overlay');

openMoreInfoButton.addEventListener('click', function (event) {
  event.preventDefault();

  moreInfoModal.classList.add(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = 'hidden';
});

function closeMoreInfoModal() {
  moreInfoModal.classList.remove(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = '';
}

closeMoreInfoButton.addEventListener(
  'click',
  closeMoreInfoModal
);

overlay.addEventListener(
  'click',
  closeMoreInfoModal
);
