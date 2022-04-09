function Produto (nome,preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        // return e settar o valor do estoque
        // pega o valor e retorna ele para a o valor do estoque.
        get: function() {
            return estoquePrivado;
        },
        // Settar o valor do estoque
        // VALOR é o valor do estoque.
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('Erro de Tipagem');
            }
            estoquePrivado = valor;

        },
    });
}



const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;

console.log(p1.estoque);