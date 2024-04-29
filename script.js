const pw = document.getElementById('password');
const confirmPw = document.getElementById('confirm-password');

document.querySelector('button').addEventListener('click', formValidation);
document.querySelectorAll('input').forEach((input) =>
  input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      formValidation();
    }
  })
);
// Changing 2nd pw pattern each time 1st pw is changed (is this a security risk?)
// Basically, throwing all input validation into html
pw.addEventListener('change', confirmPw.setAttribute('pattern', pw.value));
confirmPw.addEventListener('change', formValidation);

function formValidation() {
  if (pw.value === confirmPw.value) {
    document.getElementById('unmatch-pwd').classList.add('hidden');
    pw.classList.remove('failed');
    confirmPw.classList.remove('failed');
  } else {
    document.getElementById('unmatch-pwd').classList.remove('hidden');
    pw.classList.add('failed');
    confirmPw.classList.add('failed');
  }
}
