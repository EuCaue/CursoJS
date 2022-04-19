// Em classes não precisa de Protoypes, já fazem isso sozinho... 
class Pessoa {
    // Método sempre criado junto com a Class se precisar
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Métodos em classes... 
    falar() {
        console.log(`${this.nome} está falando... `);
    }
};

// Precisa obrigatoriamente dos parametros
const p1 = new Pessoa('Halry', 'Henry');

// Conatação de ponto e criar chave dentro de objetos, são do mesmo jeito.
p1.idade = 18;

// Criando metódos a mais.
// Todos os métodos criados dentro da classe, já viram prototypes
p1.falar2 = function () {
    console.log(`${this.nome}, está falando denovo`);
};
console.log(p1);
p1.falar();
p1.falar2();