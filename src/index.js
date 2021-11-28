function registration() {
  const emailInput = document.querySelector('.emailInput');
  const passwordInput = document.querySelector('.passwordInput');
  emailInput.addEventListener('input', function emailInputFunc() {
    if (emailInput.validity.typeMismatch) {
      document.querySelector('.emailDiv').classList.remove('hidden');
    } else {
      document.querySelector('.emailDiv').classList.add('hidden');
    }
  });
  passwordInput.addEventListener('input', function passwordInputFunc() {
    document.querySelector('.passwordDiv').innerHTML = `${passwordInput.value.length} characters`;
    if (passwordInput.value.length === 0) {
      document.querySelector('.passwordDiv').innerHTML = '';
    }
  });
}
window.addEventListener('load', registration);
