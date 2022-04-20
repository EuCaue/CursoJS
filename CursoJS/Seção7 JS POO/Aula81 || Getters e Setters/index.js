//* Símbolo que pode ser usada para criar um chave privada, dentro do seu objeto
//* Sempre retorna um ID diferente
//* Não da para acessar a chave privada por fora do objeto
//* Usar quando o valor for privado, e for somenta usar dentro do objeto

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome,) {
        this.nome = nome;
        this[_velocidade] = 0;
    }



    // Setando um *Espelho* do get velocidade
    //? usado quando se quer setar '=' o valor
    set velocidade(valor) {
        console.log('Setter');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }


    // dando "visibilidade", para a atributo privado
    // Para conseguir ver ele por fora do objeto
    // mas imutável
    //? Pega o valor... para visualização do mesmo...
    get velocidade() {
        console.log('Getter');
        return this[_velocidade];
    }


    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }


    freiar() {
        if (this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}


const c1 = new Carro('Halrymóvel');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}


//? Seter é usado quando vamos atribuir um valor a um Getter.
c1.velocidade = 99;
//? Getter é utilizado quando temos que exbir um valor...
//! O valor que o getter recebe é o que vem depois do sinal de atribuição
console.log(c1.velocidade);