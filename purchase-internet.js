const plans = {
  basic: {
    speed: 'Up to 30 mb/s',
    price: '£24.99',
    devices: 2,
  },
  standard: {
    speed: 'Up to 120 mb/s',
    price: '£34.99',
    devices: 5,
  },
  plus: {
    speed: 'Up to 1000 mb/s',
    price: '£41.99',
    devices: 'All personal',
  }
};

document
  .querySelectorAll('.w-plan-option__input')
  .forEach(function (input) {
    input.addEventListener('change', function () {
      const plan = plans[this.value]

      document.querySelector(
        '.w-plan-details__speed'
      ).textContent = plan.speed;

      document.querySelector(
        '.w-plan-details__devices'
      ).textContent = plan.devices + ' devices';

      document.querySelector(
        '.w-plan-price__amount'
      ).textContent = plan.price;
    })
  });

const modal = document.getElementById('speedTestModal');
const openButton = document.getElementById('openSpeedTestModal');
const closeButton = document.getElementById('closeSpeedTestModal');
const overlay = modal.querySelector('.w-full-screen-modal__overlay');

openButton.addEventListener('click', function (event) {
  event.preventDefault();

  modal.classList.add(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = 'hidden';
})

function closeModal() {
  modal.classList.remove(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = '';
}

closeButton.addEventListener(
  'click',
  closeModal
);

overlay.addEventListener(
  'click',
  closeModal
);

document.addEventListener(
  'keydown',
  function (event) {
    if (
      event.key === 'Escape' &&
      modal.classList.contains(
        'w-full-screen-modal--open'
      )
    ) {
      closeModal();
    }
  }
);
