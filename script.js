const form = document.querySelector('form');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass2');

(function eventDelegation() {
  form.addEventListener('input', (event) => {
    const target = event.target;

    switch (target.id) {
      case 'name':
        target.setCustomValidity(
          target.validity.patternMismatch
            ? 'Name must be between two and four words.'
            : ''
        );
        break;

      case 'age':
        target.setCustomValidity(
          target.validity.rangeOverflow || target.validity.rangeUnderflow
            ? 'In army there is place only for youngsters of age 18 - 25.'
            : ''
        );
        break;

      case 'post_code':
        target.setCustomValidity(
          target.validity.patternMismatch
            ? 'Post code\'s example pattern (LV-5123)'
            : ''
        );
        break;

      case 'pass':
      case 'pass2':
        target.setCustomValidity(
          target.validity.patternMismatch
            ? 'Minimum eight characters, at least one letter and one number:'
            : ''
        );
        break;
    }

    if (
      (passConfirm.value !== pass.value) &&
      (!pass.validity.patternMismatch && !passConfirm.validity.patternMismatch)
    ) {
      pass.setCustomValidity('Password don\'t match.');
    }

    target.reportValidity();
  });
})();
