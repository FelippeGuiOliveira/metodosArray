// ----------------- 1 e 2 -----------------

let jogos = ['Osu!', 'God of War', 'Inscription', 'Assassins Creed', 'Counter Strike 2']

jogos.forEach((jogos, indice, array) => {
    console.log(`Recomendação de jogo: ${jogos}`);
    console.log(`Numero da lista: ${indice}`);
    console.log(`lista da recomendação: ${array}`);
    console.log('=======================');
    
});

console.log('----------------------------------------------------------------');

// ----------------- 3 e 4 -----------------

let numbers = [1, 2, 3, 4, 5]

let dobro = numbers.map((numbers) => {
    return numbers * 2
})

let pares = numbers.filter((numbers) => {
    return numbers % 2 == 0
})

console.log(dobro);
console.log('===================');
console.log(pares);
console.log('----------------------------------------------------------------');

// ----------------- 5 -----------------

let fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.forEach((frutas) => {
    console.log(`lista de frutas: ${frutas}`);
})


console.log('----------------------------------------------------------------');

// ----------------- 6 -----------------

let idades = [16, 48, 23, 22, 45, 8, 12]

// A
idades.filter((maiores) => {
    return maiores >= 18
})

// B
idades.forEach((idades) => {
    console.log(`Sua idade é ${idades}`);
})