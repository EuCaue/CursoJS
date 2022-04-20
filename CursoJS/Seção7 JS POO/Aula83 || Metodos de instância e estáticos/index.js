//* Static, é para quando tem um função/método para classe
//* Você usa a classe para chamar o método dela e não instâncias
//* E ao usar, usa em todas as instância ao mesmo tempo...
//* Pórem não tem como usar nada que foi definido no constructor



class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de instância
    // trocaPilha() {
    // 
    // }

    //* Método da Classe
    static trocarPilha() {
        console.log('Ok vou trocar!');
    }


}


const c1 = new ControleRemoto('LG');

c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);
//? Usando métodos 'static', usando a classe para chamar eles. 
ControleRemoto.trocarPilha();


