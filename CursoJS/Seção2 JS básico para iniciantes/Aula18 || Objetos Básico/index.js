/* const pessoa1 = {
     nome: 'Cauê',
     sobrenome: 'Souza',
     idade: 18,

};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */ 
//                          PARAMETRO

/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}
//                            ARGUMENTO
const pessoa1 = criaPessoa('Cauê', 'Otavio', 18)
console.log(pessoa1); */

const pessoa1 = {
    nome: 'Cauê',
    sobrenome: 'Souza',
    idade: 18,
    // metodo não precisam de "function", nome começo. 
    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando bom dia! A minha idade atual é essa ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }

 };

 pessoa1.fala();
 pessoa1.incrementaIdade();
 pessoa1.fala();