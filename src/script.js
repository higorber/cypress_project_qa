const form = document.getElementById('testForm');
const message = document.getElementById('message');
const clearBtn = document.getElementById('clearBtn');

// Funções de validação
function validateName(name) {
  if (name.trim().length < 2) {
    return 'Nome deve ter pelo menos 2 caracteres.';
  }
  return '';
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Email inválido.';
  }
  return '';
}

function validateAge(age) {
  const ageNum = parseInt(age);
  if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
    return 'Idade deve ser entre 1 e 120.';
  }
  return '';
}

function validateGender(gender) {
  if (!gender) {
    return 'Selecione um gênero.';
  }
  return '';
}

// Mostrar/esconder erros
function showError(fieldId, message) {
  const errorDiv = document.getElementById(fieldId + '-error');
  errorDiv.textContent = message;
  errorDiv.style.display = message ? 'block' : 'none';
}

function hideError(fieldId) {
  const errorDiv = document.getElementById(fieldId + '-error');
  errorDiv.style.display = 'none';
}

// Validação em tempo real
document.getElementById('name').addEventListener('blur', function() {
  const error = validateName(this.value);
  showError('name', error);
});

document.getElementById('email').addEventListener('blur', function() {
  const error = validateEmail(this.value);
  showError('email', error);
});

document.getElementById('age').addEventListener('blur', function() {
  const error = validateAge(this.value);
  showError('age', error);
});

document.getElementById('gender').addEventListener('blur', function() {
  const error = validateGender(this.value);
  showError('gender', error);
});

// Limpar formulário
clearBtn.addEventListener('click', function() {
  form.reset();
  message.style.display = 'none';
  message.className = 'message';
  ['name', 'email', 'age', 'gender'].forEach(field => hideError(field));
});

// Submit do formulário
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  const gender = form.gender.value;

  // Validar todos os campos
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const ageError = validateAge(age);
  const genderError = validateGender(gender);

  showError('name', nameError);
  showError('email', emailError);
  showError('age', ageError);
  showError('gender', genderError);

  if (nameError || emailError || ageError || genderError) {
    message.textContent = 'Por favor, corrija os erros acima.';
    message.className = 'message error';
    message.style.display = 'block';
    return;
  }

  // Sucesso
  message.textContent = `Olá ${name}! Seu cadastro foi enviado com sucesso.`;
  message.className = 'message success';
  message.style.display = 'block';

  // Limpar o formulário após 3 segundos
  setTimeout(() => {
    form.reset();
    message.style.display = 'none';
    ['name', 'email', 'age', 'gender'].forEach(field => hideError(field));
  }, 3000);
});
