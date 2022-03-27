function Calculadora () {

    this.display = document.querySelector('.display');


    this.clearDisplay = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.enterPressed = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        })
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Invalida!'); return;
            }

            this.display.value = String(conta);
        }catch (e) {
            alert('Conta Invalida'); return;
        }
    }

    this.inicia = () => {
        this.cliqueBotes();
        this.enterPressed();
    }

    this.cliqueBotes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num') ) {
                this.btnParaDisplay(el.innerText);
                
            }
            if(el.classList.contains('btn-clear') ) {
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del') ) {
                this.delete();
            }
            if(el.classList.contains('btn-eq') ) {
                this.realizaConta();
            }
        })
    }

   this.btnParaDisplay = (valor) => this.display.value += valor;
}

const calculadora = new Calculadora();
calculadora.inicia();