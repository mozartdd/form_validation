const btn = document
  .querySelector('button')
  .addEventListener('click', (event) => {
    event.preventDefault();
  });

const form = document.querySelector('form');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass2');

(function eventDelegation() {
  form.addEventListener('input', (event) => {
    const target = event.target;

    if (target.id === 'name') {
      if (target.validity.patternMismatch) {
        target.setCustomValidity('Name must be between two and four words.');
      } else {
        target.setCustomValidity('');
      }
    } else if (target.id === 'age') {
      if (target.validity.rangeOverflow || target.validity.rangeUnderflow) {
        target.setCustomValidity('In army there is place only for youngsters of age 18 - 25.');
      } else {
        target.setCustomValidity('');
      }
    } else if (target.id === 'post_code') {
      if (target.validity.patternMismatch) {
        target.setCustomValidity('Post code\'s example pattern (LV-5123)');
      } else {
        target.setCustomValidity('');
      }
    } else if (target.id === 'pass' || target.id === 'pass2') {
      if (target.validity.patternMismatch) {
        target.setCustomValidity('Minimum eight characters, at least one letter and one number:');
      } else {
        target.setCustomValidity('');
      }
    }
    if ((passConfirm.value !== pass.value) && (!pass.validity.patternMismatch && !passConfirm.validity.patternMismatch)) {
      pass.setCustomValidity('Password don\'t match.')
    }
    target.reportValidity();
  });
})();
