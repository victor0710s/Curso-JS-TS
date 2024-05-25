// Diferença entre VAR e LET (Aula 9)

// VAR permite redeclarar variaveis, o que pode ser ruim ao decorrer de um projeto
var nome = 'Victor';
console.log(nome);
var nome = 'Silva'
console.log(nome);

// nome = 'Fulano'; -> NÃO FAÇA ISSO!!!!

// LET não permite redeclarar variaveis
let nomeDois = 'Victor';
console.log(nomeDois);
//let nomeDois = 'Silva'; // Gera um ero 