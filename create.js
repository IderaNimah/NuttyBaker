
document.getElementById('eyeIcon').addEventListener('click', function() {
  const passwordInput = document.getElementById('passwordInput');
  const icon = document.getElementById('eyeIcon');
  
  if (passwordInput.type === 'text') {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
});
