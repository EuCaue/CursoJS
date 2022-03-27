/* 
Constructor Functions = => objetos
Factory Functions => objetos
Constructor => Pessoa (new)
*/


function Pessoa(nome, sobrenome) {
    // Atributo interno, não é acessável por fora do objeto.
    const ID = 945876321;

    // Método interno, não é acessável por fora do objeto.
    const metodoInterno = () => {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome} sou um método`);
    };
}
// new cria um objeto vázio, faz o this apontar para o objeto vázio e retorna o valor implicitamente.
const p1 = new Pessoa('Halry', 'Henry');
const p2 = new Pessoa('Henry', 'Halry');
console.log(p1);
p1.metodo();
p2.metodo(); 