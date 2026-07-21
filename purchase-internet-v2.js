const plans = {
  basic: {
    speed: '30 mb/s',
    price: '£24.99',
    devices: 2,
    data: 'Unlimited',
    description: 'Perfect for light browsing, messaging and social.',
  },

  standard: {
    speed: '120 mb/s',
    price: '£34.99',
    devices: 5,
    data: 'Unlimited',
    description: 'Ideal for most people — streaming, calls, everyday use.',
  },

  plus: {
    speed: '1000 mb/s',
    price: '£41.99',
    devices: 'All personal devices',
    data: 'Unlimited',
    description: 'Best for gaming, large downloads and 4K streaming.',
  }
};

const passes = {
  '1 day': {
    speed: '100 mb/s',
    price: '£6',
    devices: 5,
    data: 'Unlimited',
  },

  '4 days': {
    speed: '100 mb/s',
    price: '£11',
    devices: 5,
    data: 'Unlimited',
  },

  '7 days': {
    speed: '100 mb/s',
    price: '£16',
    devices: 5,
    data: 'Unlimited',
  }
};

const iconMap = {
  basic: 'basic',
  standard: 'standard',
  plus: 'plus',

  '1 day': 'standard',
  '4 days': 'standard',
  '7 days': 'standard',
};

const tabs = document.querySelectorAll('.w-plan-tabs__tab')
const panels = document.querySelectorAll('.w-plan-tabs__panel')

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {

    tabs.forEach(function (item) {
      item.classList.remove('w-plan-tabs__tab--active')
    });

    panels.forEach(function (panel) {
      panel.classList.remove('w-plan-tabs__panel--active')
    });

    this.classList.add('w-plan-tabs__tab--active');

    if (this.dataset.tab === 'passes') {
      selectedPlan = '7 days';
      renderPlans(passes, 'passes');
      updateUI(passes, 'passes');
    } else {
      selectedPlan = 'standard';
      renderPlans(plans, 'monthly');
      updateUI(plans, 'monthly');
    }

    document
      .getElementById(this.dataset.tab)
      .classList.add('w-plan-tabs__panel--active');
  });
});


let selectedPlan = 'standard';
const recommendedPlan = 'standard';

function renderPlans(selectedPlans = plans, type = 'monthly') {
  const plansContainer =
    document.querySelector(
      `.w-plan-selector__${type}-plans`
    );

  plansContainer.innerHTML = '';

  console.log('renderPlans selectedPlan:', selectedPlan);

  Object.entries(selectedPlans).forEach(
    function ([key, plan]) {
      const active =
        key === selectedPlan
          ? 'w-plan-simple-card--active'
          : '';

      const recommendedBanner =
        key === recommendedPlan
          ? '<div class="w-plan-simple-card__recommended-banner">Recommended</div>'
          : '';
      
      const recommendedClass =
        key === recommendedPlan
          ? 'w-plan-simple-card--recommended'
          : '';

      const iconName = iconMap[key] || 'standard';

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
                  src="img/speed_${iconName}_icon.svg"
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

              <div class="w-plan-simple-card__row-info">
                <img
                  src="img/swap_vert_icon.svg"
                  alt="Data Icon"
                  class="w-plan-simple-card__icon"
                >
                <span>${plan.data}</span>
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
          console.log('this.dataset.plan:', this.dataset.plan);
          selectedPlan = this.dataset.plan;

          updateUI(selectedPlans, type);
          renderPlans(selectedPlans, type);
        }
      )
    });
};

function keyToTitleCase(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

function updateUI(selectedPlans = plans, type = 'monthly') {
  const plan = selectedPlans[selectedPlan];
  const iconName = iconMap[selectedPlan] || 'standard';

  const billingCycle = type === 'monthly'
    ? '<span class="w-plan-price__row-cycle">/month</span>'
    : '';

  document.getElementById(
    'planName'
  ).textContent = keyToTitleCase(selectedPlan);

  document.getElementById(
    'planSpeedIcon'
  ).src = `img/speed_${iconName}_icon.svg`;

  document.getElementById(
    'totalPrice'
  ).innerHTML = plan.price + billingCycle;

  document.getElementById(
    'planSpeed'
  ).textContent = plan.speed;

  document.getElementById(
    'planDevices'
  ).textContent = plan.devices;
};

updateUI(plans, 'monthly');
renderPlans(plans, 'monthly');
