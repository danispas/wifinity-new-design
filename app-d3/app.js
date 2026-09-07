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
const overlay = moreInfoModal.querySelector('.w-full-screen-modal__overlay');

openMoreInfoButton.addEventListener('click', function (event) {
  event.preventDefault();

  moreInfoModal.classList.add(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = 'hidden';
})

function closeModal() {
  moreInfoModal.classList.remove(
    'w-full-screen-modal--open'
  );

  document.body.style.overflow = '';
}

closeMoreInfoButton.addEventListener(
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
      moreInfoModal.classList.contains(
        'w-full-screen-modal--open'
      )
    ) {
      closeModal();
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