
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

// ?           Mixing 
// Desacoplando tudo da Factory function
// tornando menos dependente... 
const pessoaPrototype = { ...falar };

// mesma coisa do cima, so que de outo jeito. 
// const pessoaPrototype = Object.assign({}, falar);



function criaPessoa(nome, sobrenome) {
    // Criando os métodos das funções, como prototypes
    // para ser "usavel" o JS
    // const pessoaPrototype = {
    //     falar() {
    //         console.log(`${this.nome} está falando`);
    //     },
    // };

    // Retornando a criação do objeto
    // mais linkando a os prototypes
    // e criando as chaves dela.
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p1 = criaPessoa('Halry', 'Henry');
const p2 = criaPessoa('Alvaro', 'Soares');
console.log(p1.sobrenome);
console.log(p2.nome);
p1.falar();
p2.falar();
