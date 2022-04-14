// Produto => aumento e desconto    
// Camiseta = Cor 
// Caneca =  material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    // Herda os atributos da outra função construtora...
    Produto.call(this, nome, preco);

    this.cor = cor;
}

// Fazendo o prototype do Produto, ser passado para um objeto vazio
// com os prototipos dele, e passando esses para os prototypes da
// camiseta, mas não linkando
// Tudo que for alterado no prototype na camiseta
// não será alterado no prototype do Produto.
Camiseta.prototype = Object.create(Produto.prototype);

// Configurando para que o constructor desse objeto...
// Seja o construtor dela, não o produto...
// Que veio quando foi linkando o Produto.prototype
Camiseta.prototype.constructor = Camiseta;


// sobre escreve o prototype que foi passado para ele 
// mas não alterando o prototype de onde ele veio.  
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    // Herdando as chaves de Produto
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;


    // definido a "privacidade" do estoque...
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        },
    });
};

// Setando o prototype e o constructor certo
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 25, 'Preto');
const caneca = new Caneca('Caneca', 15, 'Porcelana', 5);
const p1 = new Produto('Gen', 25);
caneca.estoque = 100000;

// testes
caneca.aumento(100);
p1.aumento(100);
camiseta.aumento(100);
console.log(camiseta);
console.log(p1);
console.log(caneca);
console.log(caneca.estoque);