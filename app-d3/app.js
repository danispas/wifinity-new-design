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

const boostYourPlanModal = document.getElementById('boostYourPlanModal');
const openBoostYourPlanButton = document.getElementById('openBoostYourPlanModal');
const closeBoostYourPlanButton = document.getElementById('closeBoostYourPlanModal');

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

closeMoreInfoButton.addEventListener(
  'click',
  closeMoreInfoModal
);

overlay.addEventListener(
  'click',
  closeMoreInfoModal
);

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

closeSpeedTestButton.addEventListener(
  'click',
  closeSpeedTestModal
);

speedTestOverlay.addEventListener(
  'click',
  closeSpeedTestModal
);

openBoostYourPlanButton.addEventListener('click', function (event) {
  event.preventDefault();

  boostYourPlanModal.classList.add(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = 'hidden';
});

function closeBoostYourPlanModal() {
  boostYourPlanModal.classList.remove(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = '';
}

closeBoostYourPlanButton.addEventListener(
  'click',
  closeBoostYourPlanModal
);

const boostYourPlanOverlay = boostYourPlanModal.querySelector('.w-full-screen-modal__overlay');
boostYourPlanOverlay.addEventListener(
  'click',
  closeBoostYourPlanModal
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

// Generic function to close any modal element
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('w-full-screen-modal--open');

  const content = modal.querySelector('.w-full-screen-modal__content');
  if (content) {
    content.style.transform = '';
    content.style.transition = '';
  }

  // Restore body scrolling only if no other modals are currently open
  if (!document.querySelector('.w-full-screen-modal--open')) {
    document.body.style.overflow = '';
  }
}

// Initialize touch-to-dismiss behavior for all modals on the page
document.querySelectorAll('.w-full-screen-modal').forEach((modal) => {
  const content = modal.querySelector('.w-full-screen-modal__content');
  const closeBtn = modal.querySelector('.w-full-screen-modal__close');
  if (!content) return;

  // Bind close button dynamically if present inside this modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }

  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  function resetDragState() {
    isDragging = false;
    startY = 0;
    currentY = 0;
  }

  content.addEventListener('touchstart', (e) => {
    if (content.scrollTop <= 0) {
      startY = e.touches[0].clientY;
      currentY = startY;
      isDragging = true;
      content.style.transition = 'none';
    }
  }, { passive: true });

  content.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      if (e.cancelable) e.preventDefault();
      content.style.transform = `translateY(${deltaY}px)`;
    }
  }, { passive: false });

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const deltaY = currentY - startY;

    if (deltaY > 100) {
      closeModal(modal);
    } else {
      content.style.transition = '';
      content.style.transform = '';
    }

    resetDragState();
  };

  content.addEventListener('touchend', handleTouchEnd);
  content.addEventListener('touchcancel', handleTouchEnd);
});

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