// 705.48.450-52 070.987.720-06
/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 27

11 - (237 % 11) = 5 (Primeiro dígito)
se o digito for maior que nove, ele vira 0



7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (248 % 11) = 2 (Primeiro Dígito)
se o digito for maior que nove, ele vira 0

*/

// Como limpar os pontos do CPF 
// let cpf = '705.48.450-52';
// const cpfLimpo = cpf.replace(/\D+/g, '');
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfLimpo);
// // Como somar todos os valores do CPF... :) 
// console.log(cpfArray.reduce((ac, val) => {
//     return ac + Number(val);
// }, 0));

function ValidaCPF(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });

}

ValidaCPF.prototype.valida = function () {
    // Validando se o CPF existe
    if (typeof this.cpfLimpo === 'undefined') return false;
    // Verificando se o cpf é do tamanho inteiro.
    if (this.cpfLimpo.length !== 11) return false;
    // Validando se os números são sequencias 
    if (this.isSequencia()) return false;
    // Tirando os digitos do CPF
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;

};


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    // Transformando em array
    const cpfArray = Array.from(cpfParcial);
    //! Fazendo a conta do CPF
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    // * valinda se o cpf é feito de digitos iguais.
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};
// ValidaCPF.prototype.cpfWithoutDigits = function () {
//         this.cpfArray = Array.from(this.cpfLimpo);
//         this.cpfNoDigits = this.cpfArray.splice(0, 8);
//         return this.cpfNoDigits

// };



const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());

