/*
Criar a seguinte frase utilizando constantes e variaveis:

Victor da Silva Santos tem 21 anos, pesa 100 KG, tem 1.75 de altura e seu IMC
é de XXXXXXX.

(IMC = peso / (altura * altura))

*/

const nome = 'Victor da Silva';
const sobrenome = 'Santos';
const idade = 22; //22, pois se colocar 21 ele nao pega o ano certo devido eu fazer 22 em out/2024 ainda
const peso = 100;
const alturaEmM = 1.75;
let imc;
let anoNascimento;
// Incremento proprio para pegar o ano atual
let d = new Date();
let anoAtual = d.getFullYear();

imc = peso / (alturaEmM ** 2);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}.`);
console.log(`${nome} nasceu em ${anoNascimento}`);
