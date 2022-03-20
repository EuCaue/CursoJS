/*
Cauê Souza Castro tem 17 anos ,pesa 81 kg
tem 1.8 de altura e seu IMC é de ${resultado}
*/
const nome = 'Cauê Souza';
const sobrenome = 'Castro';
const idade = 17;
const peso = 81;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2003;


console.log(imc.toFixed(2));

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);