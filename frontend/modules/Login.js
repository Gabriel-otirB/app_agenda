import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    //Validando email front end
    if (validator.isEmail(emailInput.value)) {
      if (emailInput.nextElementSibling) {
        const emailErro = emailInput.nextElementSibling;
        emailErro.remove();
      }
    }

    if (!validator.isEmail(emailInput.value)) {
      const mensagemErro = emailInput.nextElementSibling;
      if (!mensagemErro) {
        emailInput.insertAdjacentHTML('afterend', '<span class="text-danger">E-mail inválido</span>');
      }
      error = true;
    }

    //validando senha front end
    if (!this.validaSenha(passwordInput)) {
      if (passwordInput.nextElementSibling) {
        const passwordInputlErro = passwordInput.nextElementSibling;
        passwordInputlErro.remove();
      }
    }

    if(this.validaSenha(passwordInput)) {
      const mensagemErro = passwordInput.nextElementSibling;
      if (!mensagemErro) {
        passwordInput.insertAdjacentHTML('afterend', '<span class="text-danger">Senha precisa ter entre 3 e 50 caracteres</span>');
      }
      error = true;
    }

    if(!error) el.submit();
  }

  validaSenha(passwordInput) {
    return passwordInput.value.length < 3 || passwordInput.value.length > 50;
  }
}
