function enviar(){
    // declara array
    const pessoas = [];
   // pega os valores do formulario no HTML
   const nome = document.getElementById('nome');
   const sobrenome = document.getElementById('snome');
   const peso = document.getElementById('peso');
   const altura = document.getElementById('altura');
   const h1 = document.getElementById('h1')

    // Colocar os valores do objeto dentro do array.
   pessoas.push({
       nome: nome.value,
       sobrenome: sobrenome.value,
       peso: peso.value,
       altura: altura.value,

   });
   console.log(pessoas);
   // Escreve no documento HTML os valores. 
   h1.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

   


    } 

    



