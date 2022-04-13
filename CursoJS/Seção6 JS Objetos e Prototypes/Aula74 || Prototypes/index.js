// Prototypes são um jeito de na função construtora, colocar todas as funções
// que seriam criadas todas as vezes junto com objeto...
// em somente um local da memória.. 
// ao invés de sempre criar em cada instância da função construtora.
// Prototypes já estão em todas as funções construtoras.
// E são automaticamente criados juntos.
// Todos objetos que vieram da função construtora terá o prototype.
// Prototype primeiro buscar na função construtora e depois no .prototype.
function Pessoa (nome, sobrenome) { 
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => { 
        // `${this.nome} ${this.sobrenome}`;
    }


// Pessoa.prototype === pessoa1.__proto__


Pessoa.prototype.nomeCompleto = function () { 
    return `${this.nome}  ${this.sobrenome}`;
};


// Instâncias
const pessoa1 = new Pessoa('Halry', 'Henry');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
console.log(pessoa1.nomeCompleto());