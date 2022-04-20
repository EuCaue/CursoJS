//? A herança funciona de cima para baixo
//? Herda da classe pai, mas a classe pai, não herda nada... 
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} está ligado`);
            return;
        }

        this.ligado = true;
    }


    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} está desligado`);
            return;
        }

        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// d1.desligar()
// d1.desligar()
// console.log(d1);


//! Extender somente a 3x  
//? extends ClasseASerHerdada
//? assim que se herda classes em JS
//? Herança de classes
class Smartphone extends DispositivoEletronico { 
    constructor(nome, cor, modelo) {
    //? super() serve para herdar o construtor e tudo que foi feito nele
    //? para a classe atual 
    super(nome)
    this.cor = cor;
    this.modelo = modelo
    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi;
    }

    // Alterando métodos herdados
    // Ele sempre busca primeiro no Objeto
    // Depois no "Pai" dele.
    ligar() {
        console.log(`Alterou o método de ligar`);
    }
}


const s1 = new Smartphone('Iphone', 'Preto', 'X')
const t1 = new Tablet('Tab', true)
t1.ligar()

console.log(t1);
console.log(s1);
