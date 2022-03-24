 function retornaFuncao (nome) {
     return function() {
       return nome;  
     };
 }

 // tem o closure de conseguir pegar o escopo léxico da Parent + o global.
 //  tem acesso ao escopo que ela está retornando, ao escopo dos {} e o global.
//  podem ter acesso a closures diferentes. 
 const funcao = retornaFuncao('Vraulisson');
 const funcao2 = retornaFuncao('Cauê');
 console.log(funcao());
 // .dir retorna no navegador informações sobre o escopo léxico da função.
 console.dir(funcao2());