const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Serve para "fatiar" o array, o primeiro valor é para indicar de qualquer o indice
// Segundo parametro é para quantos elementos é para apagar, apartir do parametro inicial.
// Proximo parametro é o valor que vai ser recolocado no lugar dos elementos removidos.
// Pode ser usado para adicionar se o segundo parametro for 0, então ele adicionará após o indice que foi passado.
// Retorna o valor removido, pórem como array.
// Faz o papel de unshift, pop, shift, push
nomes.splice(0, 2, 'bom', 'dia')



console.log(nomes);