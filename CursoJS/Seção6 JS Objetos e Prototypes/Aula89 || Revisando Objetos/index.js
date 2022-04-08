// Valor literal de string "" '' `
// Valor literal de number 8
// Valor literal de array []
// Valor literal do object {}
// Valor literal da function function


//  objeto literal
const pessoa = {
    // corpo do objeto {} 
    // chave do objeto
    nome: "Cauê",
    sobrenome: 'Souza'

};

// Como acessar os  valores de atributos do seu objeto
// Se o valor dentro da variável for igual o da chave
// da para acessar dinamicamente usando objeto[variavel]
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['nome']);
console.log(pessoa.nome);


// Declarando objetos com a função construtora de objetos.
const pessoa1 = new Object();
pessoa1.nome = 'Halry';
pessoa1.sobrenome = 'Henry';
pessoa1.idade = 18;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome`);
};
// Descobrindo a idade da pessoa.
pessoa1.getBirthDay = function()  {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade;
}; 


pessoa1.falarNome();
console.log(pessoa1.getBirthDay());
// Apagando uma chave do objeto.
delete pessoa1.nome;


//  Usando o forIn para ver todas as chaves do objetos.
for (let chave in pessoa1) { 
    // usando for para percorrer todos os valores da chave.
    // console.log(chave);    
    console.log(pessoa1[chave]);
};


// Padrões de projetos
// Factory functions / Constructor Functions / Classes  

// Factory Functions
function criaPessoa(nome, sobrenome) {
    return { 
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Alvaro', 'Soares')
console.log(p1.nomeCompleto);


// Constructor Functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p2 = new Pessoa('Woravla', 'Soares');
console.log(p2);

// Serve para congelar os valores da chaves do objeto
Object.freeze(p2); 