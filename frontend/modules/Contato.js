import validator from "validator";

export default class Cadastro {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    const emailInput = el.querySelector('input[name="email"]');
    let error = false;

    //Validando nome
    if (!this.validaNome(nomeInput)) {
      if (nomeInput.nextElementSibling) {
        const nomeErro = nomeInput.nextElementSibling;
        nomeErro.remove();
      }
    }

    if (this.validaNome(nomeInput)) {
      const mensagemErro = nomeInput.nextElementSibling;
      if (!mensagemErro) {
        nomeInput.insertAdjacentHTML('afterend', '<span class="text-danger">"Nome" precisa ter pelomenos 3 letras</span>');
      }
      error = true;
    }

    //Validando sobrenome
    if (!this.validaSobrenome(sobrenomeInput)) {
      if (sobrenomeInput.nextElementSibling) {
        const sobrenomeErro = sobrenomeInput.nextElementSibling;
        sobrenomeErro.remove();
      }
    }

    if (this.validaSobrenome(sobrenomeInput)) {
      const mensagemErro = sobrenomeInput.nextElementSibling;
      if (!mensagemErro) {
        sobrenomeInput.insertAdjacentHTML('afterend', '<span class="text-danger">"Sobrenome" precisa ter pelomenos 3 letras</span>');
      }
      error = true;
    }

    //Validando telefone
    if (!this.validaTelefone(telefoneInput)) {
      if (telefoneInput.nextElementSibling) {
        const telefoneErro = telefoneInput.nextElementSibling;
        telefoneErro.remove();
      }
    }

    if (this.validaTelefone(telefoneInput)) {
      const mensagemErro = telefoneInput.nextElementSibling;
      if (!mensagemErro) {
        telefoneInput.insertAdjacentHTML('afterend', '<span class="text-danger">Telefone inválido</span>');
      }
      error = true;
    }

    //Validando email
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

    if (!error) el.submit();
  }

  validaSobrenome(sobrenome) {
    return sobrenome.value.length < 3 || !sobrenome.value;
  }

  validaNome(nome) {
    return nome.value.length < 3 || !nome.value;
  }

  validaTelefone(telefone) {
    return telefone.value.length < 10 || !telefone.value;
  }

}