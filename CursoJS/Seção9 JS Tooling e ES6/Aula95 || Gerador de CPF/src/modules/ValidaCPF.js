export default class ValidaCPF {
    constructor(cpfEnviado) {
        //* Setando o valor do cpfLimp
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ''),

        });
    }

    //* Checkando se é sequência
    éSequencia() {
            return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        //? Gerando novo CPF
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        // Gerando Digitos
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringN of cpfSemDigitos) {
            total += reverso * Number(stringN);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        // Validando oCPF
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequencia()) return false;
        // if (!this.geraNovaCpf()) return false;
        this.geraNovoCpf();


        return this.novoCPF === this.cpfLimpo;
    }

}


const validaCPF = new ValidaCPF('705.484.450-52');

console.log('Cheguei até aqui :D');