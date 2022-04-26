//* Faz requisição de qualquer tipo de dado e formato #
const request = (obj) => {
  return new Promise((resolve, reject) => {
      // Nome padrão para XMLHTTPREQUEST 
  const xhr = new XMLHttpRequest();
  // Métodos do HTTP requesto
  //* Metodo a ser executado, url para onde vai
  //* e se é assincrono
  // tudo isso vindo de um objeto
  xhr.open(obj.method, obj.url, true);
  //* Para enviar o 'POST';  
  xhr.send();

  xhr.addEventListener('load', () => {
    // Se checando se é 'sucess', nos códigos...
    //* Códigos HTTP 
    if (xhr.status >= 200 && xhr.status < 300) {
      // Retornando o foi buscado no HTML
      resolve(xhr.responseText);

    } else {
      reject(xhr.statusText);
    }
  });

  })   

};

document.addEventListener('click', e => {
  const el = e.target;
  // pegando o nome da tag de qualquer elemento clicado
  const tag = el.tagName.toLowerCase();

  // Checando se o elemento sendo clicado é um hyperLink
  if (tag === 'a') {
    // Previnindo de fazer o compportamento padrão
    // de clickar no link e abrir
    e.preventDefault();
    // função que carrega a pagina dentro da página
    carregaPagina(el);
  }
});


async function carregaPagina(el) {
  // Pegando o caminho para a página a ser carregada
  const href = el.getAttribute('href');
  // Chamando a função request, com o objeto de parametro
  try {
  const response = await request({
    method: 'GET',
    url: href,
  })
  carregaResultado(response)
  }catch(e) { 
    console.log(e);
  }
  
};


// Função para escrever de fato no HTML 
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}