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
