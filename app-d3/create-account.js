const moreInfoModal = document.getElementById('moreInfoModal');
const openMoreInfoButton = document.getElementById('openMoreInfoModal');
const closeMoreInfoButton = document.getElementById('closeMoreInfoModal');

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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("account-form");
  const submitBtn = document.getElementById("submit-btn");

  // Select all required text/email/tel/password inputs
  const textInputs = form.querySelectorAll(".w-login-content__input-field");
  const privacyCheckbox = document.getElementById("privacy-policy");

  function validateForm() {
    // Check if every text input has some value entered
    const allInputsFilled = Array.from(textInputs).every(
      (input) => input.value.trim() !== ""
    );

    // Check if privacy policy checkbox is checked
    const isCheckboxChecked = privacyCheckbox.checked;

    // Enable button only if ALL conditions are met
    if (allInputsFilled && isCheckboxChecked) {
      submitBtn.removeAttribute("disabled");
      submitBtn.classList.remove("is-disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
      submitBtn.classList.add("is-disabled");
    }
  }

  // Add event listeners to all input fields
  textInputs.forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  // Add event listener to checkbox
  privacyCheckbox.addEventListener("change", validateForm);
});
