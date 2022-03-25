 //  Factory function
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
          // podemos colocar get na frente de um método, para ele virar um método, mas chamado como atributo.
    // Getter
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`; 
        },
        
        // Setter
        // valor do getter vem para o setter
        set nomecompleto(valor) {
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ')
           console.log(valor);
           
        },

        fala(assunto) {
            // com .this podemos pegar o valor de qualquer lugar objeto, mesmo fora do escopo léxico.
            // .this, signfica a variável que está acessando o valor, neste exemplo seria o p1.
            return `${this.nome} está falando do assunto ${assunto},`;
        },

        altura,
        peso,
        // podemos colocar get na frente de um método, para ele virar um método, mas chamado como atributo.
    // Getter
        get imc() {
            const indice  = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        },
        
    };
} 

const p1 = criaPessoa('Cauê', 'Souza', 1.8, 80);
const p2 = criaPessoa ('Vrau', 'Roberto', 1.5, 65)
p1.nomecompleto = 'Vraulisson Caue Souza'
p2.nomecompleto = 'Roberto Halry Bode'
// console.log(p1.nomecompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);
// console.log(p2.imc);
