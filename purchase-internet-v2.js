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
    devices: 'All personal devices',
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

      plansContainer.innerHTML += `
        <div
          class="w-plan-simple-card ${active}"
          data-plan="${key}"
        >
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
