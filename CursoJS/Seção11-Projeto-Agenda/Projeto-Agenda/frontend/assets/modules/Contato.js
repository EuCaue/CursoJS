import validator from 'validator';

// Classe para validar o formulário
export default class Contato {
  constructor(formClass) {
    // Variável do formulário
    this.$form = document.querySelector(formClass);
  }

  // "Iniciador"
  init() {
    this.events();
  }

  // Evento do checking
  events() {
    // Senão receber um form, return;
    if (!this.$form) return;
    this.$form.addEventListener('submit', e => {
      // Prevenindo o padrão do submit de atualizar a página
      e.preventDefault();
      // Chamando o metódo de validar
      this.validate(e);
    });
  }

  validate(e) {
    //? Nome obrigatório
    // Email ou telefone também
    // Input's do form para validar
    const el = e.target;
    const $nomeInput = el.querySelector('input[name="nome"]');
    const $emailInput = el.querySelector('input[name="email"]');
    const $telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    // Checagem do nome
    if (!$nomeInput.value) {
      alert('Nome é um campo obrigatório');
      error = true;
      return;
    }

    // Checando email & telefone
    if (!validator.isEmail($emailInput.value) && !$telefoneInput.value) {
      alert('Email ou telefone é necessário');
      error = true;
    }

    // Senão tiver nenhum erro, envia o formulário
    if (!error) el.submit();
  }
}



