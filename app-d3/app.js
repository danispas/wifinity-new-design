document
.querySelectorAll('.w-plan-card')
.forEach(function(card){
  card.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        return;
    }
    this.classList.toggle('w-plan-card--expanded');
  });
});

const moreInfoModal = document.getElementById('moreInfoModal');
const openMoreInfoButton = document.getElementById('openMoreInfoModal');
const closeMoreInfoButton = document.getElementById('closeMoreInfoModal');

const speedTestModal = document.getElementById('speedTestModal');
const openSpeedTestButton = document.getElementById('openSpeedTestModal');
const closeSpeedTestButton = document.getElementById('closeSpeedTestModal');

const overlay = moreInfoModal.querySelector('.w-full-screen-modal__overlay');
const speedTestOverlay = speedTestModal.querySelector('.w-full-screen-modal__overlay');

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

openSpeedTestButton.addEventListener('click', function (event) {
  event.preventDefault();

  speedTestModal.classList.add(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = 'hidden';
});

function closeSpeedTestModal() {
  speedTestModal.classList.remove(
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

closeSpeedTestButton.addEventListener(
  'click',
  closeSpeedTestModal
);

speedTestOverlay.addEventListener(
  'click',
  closeSpeedTestModal
);

document.addEventListener(
  'keydown',
  function (event) {
    if (
      event.key === 'Escape' &&
      moreInfoModal.classList.contains(
        'w-full-screen-modal--open'
      )
    ) {
      closeMoreInfoModal();
    }
  }
);

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

    document
      .getElementById(this.dataset.tab)
      .classList.add('w-plan-tabs__panel--active');
  });
});