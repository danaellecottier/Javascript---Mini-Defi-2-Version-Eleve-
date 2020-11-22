// 1. Déclarer les variables

const lionelPoids = 66.7; 
const lionelGrandeur = 1.7; 

const ronaldoPoids = 79.8; 
const ronaldoGrandeur = 1.85; 

// 2. Calculer l'IMC

const lionelIMC = lionelPoids / (lionelGrandeur * lionelGrandeur);
const ronaldoIMC = ronaldoPoids / (ronaldoGrandeur * ronaldoGrandeur);


// 3. Afficher l'IMC

console.log(`L'imc de Lionel Messi est de ${lionelIMC} alors que l'IMC de Ronaldo Christiano est de ${ronaldoIMC}`);

// 4. Est ce que l'IMC de Lionel est plus élevé que celui de Christiano?

var lionelPlusEleve = lionelIMC > ronaldoIMC;

console.log(lionelPlusEleve);

// 5. Écrire dans une phrase qui a l'IMC le plus élevé à l'aide des variables.

if (lionelIMC > ronaldoIMC) {
    console.log('Lionel a un IMC plus élevé que Ronaldo.');
} else {
    console.log('Ronaldo a un IMC plus élevé que Lionel.');
};