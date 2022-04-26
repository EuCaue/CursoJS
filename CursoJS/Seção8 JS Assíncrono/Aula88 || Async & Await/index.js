function rand(min = 1, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('Erros mesmo'));
        return;
      }

      resolve(msg);
    }, tempo);
  });
}

//! esperaAi('Fase 1', rand())
//!   .then(valor => {
//!     console.log(valor);
//!     return esperaAi('Fase 2', rand());
//!   })
//!   .then(fase => {
//!     console.log(fase);
//!     return esperaAi('Fase 3', rand());
//!   })
//!   .then(fase => {
//!     console.log(fase);
//!     return fase;
//!   })
//!   .then(fase => { 
//!     console.log('Última fase foi:', fase);
//!   })
//!   .catch(e => console.log(e));


//? async, so pode ser usado em uma função
//? e precisa do await, para ser assicrono.
//* Basicmente serve para fazer melhor oque as promises e .then() fazem 
async function executa() { 
  //* Quando achar o erro ele vai para o bloco catch e acaba. 
  try { 
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
   
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
  }
  catch(e) {
    console.log(e);
  }
 
 console.log('Última fase foi:', fase);
}

// ESTADOS DA PROMISE
//* pending => pendente
//* fullfilled => resolvida
//* rejected => rejeitado 