//*  Polimorfismo é quando a se tem herdança de um mesmo classe pai... 

//? Criando a classe pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//? Criando as funções
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: R$:${this.saldo}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    if (typeof valor !== 'number') {
        throw new TypeError('Valor inválido');
    }
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag: ${this.agencia}\nConta:${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}\n`);
};

// const conta1 = new Conta(4492, 2221, 2000)
// console.log(conta1);
// conta1.depositar(1000)
// conta1.verSaldo();
// conta1.sacar(3000)


//? Criando a classe filha de "Conta"
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}
//? Setando os prototypes da "herdeira"
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


//* Polimorfismo acontecendo aqui... 
//* Porquê está modificando a função da classe pai... 
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: R$:${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();

};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);

}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//Teste
const contaCorrente = new ContaCorrente(2510, 6870, 0, 350);
const contaPoupanca = new ContaPoupanca(4575, 2047, 0);
contaCorrente.depositar(10);
contaCorrente.sacar(110);

contaPoupanca.depositar(10);
contaPoupanca.sacar(110);
