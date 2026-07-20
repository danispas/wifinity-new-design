const plans = {
  basic: {
    speed: '30 mb/s',
    price: '£24.99',
    devices: 2,
    description: 'Perfect for light browsing.',
  },

  standard: {
    speed: '120 mb/s',
    price: '£34.99',
    devices: 5,
    description: 'Ideal for streaming and calls.',
  },

  plus: {
    speed: '1000 mb/s',
    price: '£41.99',
    devices: 'All personal devices',
    description: 'Best for gaming and 4K streaming.',
  }
};

const plansContainer =
  document.querySelector(
    '.w-plan-selector__plans'
  );

let selectedPlan = 'basic';
let travellers = 1;

function renderPlans() {
  plansContainer.innerHTML = '';

  Object.entries(plans).forEach(
    function ([key, plan]) {
      const active =
        key === selectedPlan
          ? 'w-plan-simple-card--active'
          : '';

      const recommendedBanner =
        key === 'plus'
          ? '<div class="w-plan-simple-card__recommended-banner">Fastest</div>'
          : '';
      
      const recommendedClass =
        key === 'plus'
          ? 'w-plan-simple-card--recommended'
          : '';

      plansContainer.innerHTML += `
        <div class="w-plan-simple-card-container">
          ${recommendedBanner}

          <div
            class="w-plan-simple-card ${active} ${recommendedClass}"
            data-plan="${key}"
          >

            <div class="w-plan-simple-card__row">
              <div class="w-plan-simple-card__plan-name">
                ${key}
              </div>

              <div class="w-plan-simple-card__prices">
                <span class="w-plan-simple-card__price">
                  ${plan.price}
                </span>
              </div>

              <div class="w-plan-simple-card__check"></div>
            </div>

            <div class="w-plan-simple-card__row-start">
              <div class="w-plan-simple-card__row-info">
                <img
                  src="img/speed_${key}_icon.svg"
                  alt="Speed Icon"
                  class="w-plan-simple-card__icon"
                >
                <span>${plan.speed}</span>
              </div>

              <div class="w-plan-simple-card__row-info">
                <img
                  src="img/devices_icon.svg"
                  alt="Devices Icon"
                  class="w-plan-simple-card__icon"
                >
                <span>${plan.devices}</span>
              </div>
            </div>

            <div class="w-plan-simple-card__row">
              <span class="w-plan-simple-card__description">${plan.description}</span>
            </div>
          </div>
        </div>
      `
    }
  );

  document
    .querySelectorAll('.w-plan-simple-card')
    .forEach(function (card) {
      card.addEventListener(
        'click',
        function () {
          selectedPlan = this.dataset.plan;

          updateUI();
          renderPlans();
        }
      )
    });
};
function keyToTitleCase(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

function updateUI() {
  const plan = plans[selectedPlan];

  document.getElementById(
    'planName'
  ).textContent = keyToTitleCase(selectedPlan);

  document.getElementById(
    'planSpeedIcon'
  ).src = `img/speed_${selectedPlan}_icon.svg`;

  document.getElementById(
    'totalPrice'
  ).textContent = plan.price;

  document.getElementById(
    'planSpeed'
  ).textContent = plan.speed;

  document.getElementById(
    'planDevices'
  ).textContent = plan.devices;
};

renderPlans();
updateUI();
