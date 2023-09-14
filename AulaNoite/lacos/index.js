//Exemplo 1: Imprimindo alguns números (COM 'WHILE')
/*
let voltas = 1 

while(voltas <= 20) { 

    console.log(`O ciclista deu ${voltas} voltas.`)

    voltas++
}
*/

//* (COM 'FOR')
/*
for (let voltas = 1; voltas <= 10; voltas++) {

    console.log(`O ciclista deu ${voltas} voltas.`)

}
*/
/*
const numeros = [14, 67, 89, 15, 23]

for (let i = 0; i < 5; i++) {
    const elemento = numeros[i]
    console.log (elemento)
}
*/


// exemplo com (FOR... OF)
/*
const numeros = [14, 67, 89, 15, 23]

for (let numero of numeros){ 
    console.log(numero)
}
*/

// EXERCÍCIO LEITURA DOS NÚMEROS PARES
/*
let i = 0

while (i <= 10) {
    
    if (i % 2 === 0) {
    console.log(i)
    }
i++
}
*/

//EXERCÍCIO BOMBA!
/*
let bomba = 10

while (bomba >= 0) {

    if (bomba === 0){
    console.log('BOOM!!!')
    } else if (bomba % 2 === 0){
        console.log('TAC')
    } else {
        console.log('TIC')
    }   
    bomba--
}
*/