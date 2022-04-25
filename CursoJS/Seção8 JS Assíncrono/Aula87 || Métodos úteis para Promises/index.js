function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('Erros mesmo'));
            return;
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// promisse.all() promisse.race() promisse.Resolve() Promise.reject()

//? Strings contam como promises resolvidas
const ps = [
    // 'Primeiro valor',
    esperaAi('Primeira PS1', rand(1, 5)),
    esperaAi('Primeira PS2', rand(1, 5)),
    esperaAi('Primeira PS3', rand(1, 5)),
    // 'Outro valor'
];


// Resolve todas as promises, e retorna todas elas
//* retornando todos os valores 
//? Sem em qualquer promises tive um erro, .all() vai retornar o valor do erro
//? ele vai rejeitar todas se tiver uma errada
// recebe como parametro o "conjunto" de promises
//! Promise.all(ps)
//!     .then(valor => {
//!         console.log(valor);
//!     })
//!     .catch(e => {
//!         console.log(`${e} `);
//!     });


//* A primeira promise a ser resolvida, será retornada
//* Apenas ela. 
//* Se o primeiro a resolver, for o erro, vai retorna o valor dele, também 
//! Promise.race(ps)
//!     .then(valor => {
//!         console.log(valor);
//!     })
//!     .catch(e => {
//!         console.log(`${e} `);
//!     });    

function baixaPagina() {
    const emCache = true;
    if(emCache) { 
        //* Serve para retornar uma promise resolvida 
        //* caso for uma checagem assim 
        // return Promise.reject('ERRO);
        // reject, retorna um erro, que vai direto para o catch
        return Promise.resolve('Página em cache');
    }else { 
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
  .then(dadosPagina => {
      console.log(dadosPagina);
  })  
  .catch( e => console.log(`${e}`));