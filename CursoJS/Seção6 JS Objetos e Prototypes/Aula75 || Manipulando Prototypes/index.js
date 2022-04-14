// new Object => Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
    nome: 'Você',
    idade: 14
};

const objB = {
    chaveB: 'B',
};

// Link o __proto__ do primeiro objeto com o segundo.
// Passado como argumento.
// Assim conseguindo acessar os valores do prototipos do primeiro objeto.
// Se for setado o prototype de outro objeto que já tenha setado 
// O prototype de outro objeto, ele terá acesso à todos os prototypes que
// já foram herdados.
// Para o que metodos herdados como prototipos, deve as mesmas chaves
// para funcionar corretamente.
Object.setPrototypeOf(objB, objA);


console.log(objB.idade);

// Função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando métodos com prototypes
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
};



const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15,
};

// Setando o prototype da variável, com o Prototype do Produto.
Object.setPrototypeOf(p2, Produto.prototype);

// Criando o objeto e já passando o prototype para ele.
const p3 = Object.create(Produto.prototype);
// definindo a propriedade do objeto
p3.preco = 113;

// Criando as chaves diretamente aqui e já pssando as configurações dela...
// Prototype é como se fosse o pai do objeto
// passar as chaves e configurações do objeto é opcional
const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
        
    }
});



// Testando se está funcionando...
p1.aumento(20);
p2.aumento(100);
p3.aumento(50);
p4.aumento(10)
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);