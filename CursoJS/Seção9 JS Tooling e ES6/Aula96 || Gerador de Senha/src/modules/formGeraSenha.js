import geraSenha from "./geradores";

//? Variáveis 
const senhaGerada = document.querySelector('.senhaGerada');
const inputQtd = document.querySelector('.inputQtd');
const checkMaiuscula = document.querySelector('.checkMaiuscula');
const checkMinuscula = document.querySelector('.checkMinuscula');
const checkNumeros = document.querySelector('.checkNumeros');
const checkSimbolos = document.querySelector('.checkSimbolos');
const btnGeraSenha = document.querySelector('.btnGeraSenha');
const senhaForca = document.querySelector('.senhaForca');


// Export default do modulo
export default () => {
  btnGeraSenha.addEventListener('click', e => {
    senhaGerada.innerHTML = gera();
  });
};



//* Gerando a senha e retornando 
function gera() {
  const senha = geraSenha(
    inputQtd.value,
    checkMaiuscula.checked,
    checkMinuscula.checked,
    checkNumeros.checked,
    checkSimbolos.checked,
  );

  checaSenha();



  return senha || 'Nada selecionado';
}


function checaSenha() {
  if (checkMaiuscula.checked && checkMinuscula.checked && checkNumeros.checked && checkSimbolos.checked) {
    senhaForca.setAttribute('class', 'senhaForte');
    senhaForca.innerHTML = 'Senha Forte';
    return senhaForca;
  } else {
    senhaForca.setAttribute('class', 'senhaFraca');
    senhaForca.innerHTML = 'Senha Fraca';
    return senhaForca;
  }
}