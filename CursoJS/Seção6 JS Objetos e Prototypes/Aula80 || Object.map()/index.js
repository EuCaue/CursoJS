const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];

// const novasPessoas = {};

// for (const {id, nome} of pessoas) {
//     novasPessoas[id] = {id, nome}
// }


// Serve para mapear um objeto 
// com as chaves na ordem certa
// e os 'id' em Number, não em String
const novasPessoas = new Map();
for (const {id, nome} of pessoas) {
    novasPessoas.set(id, {id, nome})
}


// Para acessar a chave do objeto
// Com map, tem que o Object.get(chave)
console.log(novasPessoas.get(2));

// Exemplo de uso... 
for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}