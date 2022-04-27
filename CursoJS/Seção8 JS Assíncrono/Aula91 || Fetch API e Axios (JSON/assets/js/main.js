// // buscando os dados do json
// fetch('pessoas.json')
//   //* Pegando a resposta do fetch e covertendo para JSON
//   .then(response => response.json())
//   //* Pegando o JSON e passando para a função
//   .then(json => carregaElementosNaPagina(json))
//   .catch(e => console.log(e));

//? Faz o mesmo que o fetch, porém, sem retorna um promise, e sim direto o valor
// Sendo mais prático e facíl...
// Usar sempre isso...
axios('pessoas.json')
  .then(response => carregaElementosNaPagina(response.data));


function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);


    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);

    table.appendChild(tr);


  }
  

  const resultado = document.querySelector('.container');
  resultado.appendChild(table)
}

