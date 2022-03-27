function criaCalculadora () {
    return {
        // Input do display esta no atributo display
        // Atributos são variáveis do objeto
        // Acessáveis via this.
        display: document.querySelector('.display'),


        clearDisplay() {
            this.display.value = ''
        },
        
        delete() {
            this.display.value = this.display.value.slice(0, -1);
        },

        enterPressed() {
            this.display.addEventListener('keyup', (e) => {
                const el = e.target
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Invalida!'); return;
                }

                this.display.value = String(conta);    
            }catch (e) { 
                alert('Conta Invalida');
                return;
            }
        },

        inicia() {
            this.cliqueBotoes();
            this.enterPressed();
        },

        // Quem chama o método é o this.
        cliqueBotoes() {
            // Ao usar arrow function, ao invés da function normal, o this, permanece o do "objeto que foi chamado"
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num') ) {
                    // innerText é o valor que está na tag do button.
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
            }/* .bind(this) Mandando a função usar o this "global", do que do objeto. */);
             
        },
        // Escreve no display o valor que foi clicado.
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora(); 
calculadora.inicia();