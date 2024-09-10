// Exercicio com variaveis

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Versão básica
// const tempVarA = varA;
// varA = varB;
// varB = varC;
// varC = tempVarA;

// Versão mais moderna no JS
[varA, varB, varC] = [varB, varC, varA]; // Array destructuring

console.log(varA, varB, varC); // B C A