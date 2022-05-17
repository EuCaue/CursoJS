import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.$form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.$form) return;
    this.$form.addEventListener('submit', e => {
      console.log(e);
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    //? Nome obrigatório
    // Email ou telefone também
    const el = e.target;
    const $nomeInput = el.querySelector('input[name="nome"]');
    const $emailInput = el.querySelector('input[name="email"]');
    const $telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if (!$nomeInput.value) {
      alert('Nome é um campo obrigatório');
      error = true;
      return;
    }

    if (!validator.isEmail($emailInput.value) && !$telefoneInput.value) {
      alert('Email ou telefone é necessário')
      error = true;
    }
  
    if(!error) el.submit();


    // if (!validator.isEmail($emailInput.value)) {
    //   alert('Email inválido');
    //   error = true;
    // }


  }
}



