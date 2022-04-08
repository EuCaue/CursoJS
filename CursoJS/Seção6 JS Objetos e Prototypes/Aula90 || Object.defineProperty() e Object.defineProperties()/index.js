// defineProperty() => apenas "congela" uma propriedade do objeto.
// defineProperties() => "congela" várias propriedas do objeto.

function Produto (nome,preço, estoque) {
    // this.nome = nome;
    // this.preço = preço;

// Definindo que o estoque será criado aqui, e se ele mostrará no objeto, qual valor dele...
// E se ele o valor dele é alterável.
    Object.defineProperty(this, 'estoque', {
//      Se ele vai mostrar a chave. true or false
        enumerable: true,
//      Qual o valor da chave que está sendo criado aqui. 
        value: estoque, 
//      Se ele o valor dele pode ser alterado. true or false
        writable: true,
//      Se pode apagar a chave || pode reconfigurar a chave. true or false
        configurable: false,

    });


    // Define varias propriedades de varias chaves do objetos.
    Object.defineProperties(this, {
         nome: {
             enumerable: true,
             value: nome,
             writable: true,
             configurable: true,
         },
         preço: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
         },
    })
}

const p1 = new Produto('Camiseta', 20, 3);

// Object.keys(obj) Retorna as chaves em um array.
console.log(Object.keys(p1));