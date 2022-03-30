const arr = ['Eduardo', 'Maria', 'Joana'];
// String, Objetos, Funções, Números
// função construtora do Array
//const arr = new Array('Eduardo,', 'Maria', 'Joana')
// array são passados por referencia, então tude que acontecer no arr, muda no novo e vice e versa.

// Copiado o valor com o spreed operator para dentro de novo
// const novo = [...arr]; 


// delete se usa quando quer remove uma valor do array, sem deletar o indice.
// delete arr[2];
// console.log(arr);

// Para saber a quantidade de elemento que tem dentro de um array. 
// Começando de 1, não confundir com índice.
// console.log(arr.length);

// Remove o ultimo elemento do array.
// e retorna o valor removido, caso queira jogar em uma variável.
// arr.pop();

// Remove o elemento inicial do array, assim mexendo nas posições do existentes.
// Diminuindo o número de indices.
// arr.shift()

// Adiciona um elemento no último elemento/indice do 
// arr.push('Qlqr coisa')

// Adiciona um elemento no começo do array, realocando todos os indices do mesmo.
// arr.unshift('qlqr coisa');

// Fatia o array de um indice o outro
// Sempre colocar um mais do que você quer. 
// const novo = arr.slice(0, 2);


// const string = 'Cauê Adriano Souza';
// Transforma a string em um array, separando os índices pelo valor passado nos ();
// const strings = string.split('')

// Transforma de Array para string novamente.
// Passar dentro do () o separador.
// const string = arr.join(' ')
