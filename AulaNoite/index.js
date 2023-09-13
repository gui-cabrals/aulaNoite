/* const num1 = 13
const num2 = 7

console.log("Numero 1 é igual ao Numero 2?", num1 === num2)
console.log("Numero 1 é diferente do Número2?", num1 !== num2)
console.log("Número 1 é maior que Número 2?", num1 > num2)
console.log("Número 1 é maior ou igual ao Número 2?", num1 >= num2)
console.log("Número 1 é menor que Número 2?", num1 < num2)
console.log("Número 1 é menor ou igual ao Número 2?", num1 <= num2) */


/*
var a = true
var b = false 
var c = true

var resultado1 = a && b
var resultado2 = b && c
var resultado3 = a && c
var resultado4 = a && b && c

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
*/

/*
var a = true
var b = false 
var c = true

var resultado1 = a || b
var resultado2 = b || c
var resultado3 = a || c
var resultado4 = a || b || c

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
*/

/*

var nome = "Guilherme"
var idadeTexto = prompt("Qual a sua idade?")
var idadeNumber = Number(idadeTexto)
var maiorIdade = idadeNumber >= 18
var anoAtual = 2023
var anoFuturo = 2050
var calculoIdade = anoFuturo - anoAtual
var idadeFuturo = calculoIdade + idadeNumber



console.log("Nome:", nome)
console.log("Idade:", idadeNumber)
console.log("É maior de idade?", maiorIdade)
console.log("Idade em 2050 =", idadeFuturo)


*/

/*

let nome = "Guilherme"
let idade = 28

let frase = `Meu nome é ${nome} e minha idade é ${idade} anos.` 
// Template String (``) para chamar as variáveis -> ${}

console.log(frase)

*/

/*

let nome = prompt("Insira seu nome!")
let idade = prompt("Qual é a sua idade?")

console.log("Meu nome é " + nome + " e minha idade é " + idade + " anos.")

*/

// ============================================================================================================

// <<<<<<<< PROPRIEDADES DE STRING >>>>>>>>

/*

let nome = "Guilherme dos Santos Cabral"

console.log(nome.length) // A propriedade 'length' retorna quantos caracteres tem a string

*/


/*
let CAPSLOCK = "GUILHERME DOS SANTOS CABRAL"

console.log(CAPSLOCK.toLowerCase()) //.toLowerCase() transforma todos os caracteres em minúsculo. 
*/

/*
let minusculo = "guilherme dos santos cabral"

console.log(minusculo.toUpperCase()) //.toUpperCase() transforma todos os caracteres em maiúsculo. 
*/

/*
let antesDepois = "  Retirar os espaços antes e depois  "

console.log(antesDepois.trim()) // .trim() retira os espaços no início e no fim da string. 
*/

/*
let frase = "Hoje eu comi bifes and fritas"

console.log(frase.includes("bifes"))
console.log(frase.includes("fritas")) // .includes() identifica se contém a palavra dentro da string
*/


/*
let frase = "Hoje eu comi bifes e adoro fritas"

console.log(frase.replaceAll("bifes" , "fritas")) // .replaceAll substitui palavras 
*/

/*
var frase = prompt()


console.log(frase.replaceAll("o" , "i").toUpperCase())
console.log("A frase contém: " + frase.length + " caracteres" )
*/

// ===========================================================================================================

// <<<<<<<<<<<<<<<<< ARRAYS >>>>>>>>>>>>>>>>>>

//let premios = ["chaveiro", "adesivo", "camiseta", "boné", "mouse pad"]
//console.log(premios)
//let sorte = prompt("Digite um número de 1 à 10")
//console.log(premios[sorte])

/* premios.push("Tênis", "Bermuda") //adiciona itens na lista. 
console.log(premios) */

/* premios.pop() //retira o último item da lista. 
console.log(premios) */

/*
premios.splice(1,2) 
//splice remove itens da lista. No caso declarado dentro dos "()" à partir do índice 1, remove 2 itens seguintes da lista. 
//neste caso removerá "adesivo" e "camiseta"
console.log(premios)

// console.log(premios.includes("boné")) //retorna se há o item na lista em boolean. 

*/

// ============================================================================================================

// [[[[[[[[[[[[[[[[[[FUNÇÕES]]]]]]]]]]]]]]]]]]] 
/*
function imprimirOlaMundo() { 
    console.log("Olá Mundo")
}

imprimirOlaMundo()
*/

/*
function calculoArea(altura, largura) {
    let area = altura * largura
    console.log(area)
}

calculoArea(10, 45) */

/*
function theName(meuNome){
    console.log(`Olá ${meuNome}`)
}

theName("Guilherme")
*/


/*
let theName = "Guilherme" //Variável GLOBAL

function imprimeNome(){
    let sobreNome = "Cabral" //Variável LOCAL
    console.log(`${theName} ${sobreNome}`)
}

imprimeNome()

console.log(sobreNome)
*/

/*
function calculo(numero1, numero2){
    soma = numero1 + numero2
    subtrair = numero1 - numero2
    return soma
}

calculoSoma = calculo(3, 3)

console.log(calculoSoma)
*/


// <<<<<<<<<<<<<<<<< EXERCÍCIO DE FUNÇÃO + ARRAY >>>>>>>>>>>>>>>>>

/*
numeros = [1, 2, 3, 4, 5]

function arrayNumeros(array) {    
    let primeiroNumero = array[0]
    let ultimoNumero = array[4]
    let novoArray = [primeiroNumero /2, ultimoNumero /2]
    
    return novoArray
}

//Para a função executar sua lógica, com a Array definida no Global, chamamos o nome da variável.
//Como exemplo, na function 'arrayNumeros' ela esta recebendo '(array)' ->LOCAL<-, para montar a lógica da função
//Para executar essa função com a variável 'numeros' definida no ->GLOBAL<- ou seja 'arrayNumeros(numeros)'
console.log(arrayNumeros(numeros))

============================================================================================================

*/

// <<<<<<<<<<<<<<<<< OBJETOS >>>>>>>>>>>>>>>>>

//Estrutura padrão de um objeto


/*
const objeto = { 
    primeiraPropriedade: "Valor",
    segundaPropriedade: "valor",
}
*/


//NOTAÇÃO DE PONTO (ACESSAR VALORES DENTRO DOS OBJETOS)

/*
const professor = {
 nome: "Vitor",
 idade: 27,
 email: 'vitor@gmail.com'
}
console.log(professor.idade)
*/

// ALTERANDO VALORES DO OBJETO

/*

const professor = {
 nome: "Vitor",
 idade: 27,
 email: 'vitor@gmail.com'
}


professor.nome = ‘Mika’
professor['email'] = 'profmika@gmail.com'

*/


/*

// EXERCÍCIO 1 - CRIAR UM OBJETO QUE REPRESENTE UM FILME COM AS PROPRIEDADES:
// DIREÇÃO, ANO DE LANÇAMENTO, NOME DO FILME, ELENCO, VOCÊ JÁ ASSISTIU?
// EM SEGUIDA EXECUTAR A LEITURA ACESSANDO COM NOTAÇÃO DE PONTO E COLCHETES

let filme = {
    direcao: "Mauro Lima",
    ano: 2008,
    nome: "Meu nome não é Johnny",
    elenco: ["Selton Melo", "Cléo Pires", "Cassia Kiss", "Júlia Lemmertz"],
    jaViu: true,
}

console.log(filme.direcao)
console.log(filme.ano)
console.log(filme.nome)
console.log(filme["elenco"])
console.log(filme["jaViu"])

*/

/*

//EXERCÍCIO 2: 

let pessoa = {
    nome: "Guilherme",
    idade: 28,
    genMusical: "Rock",
}

    console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa["idade"]} anos e gosta muito de ${pessoa.genMusical}`)
*/

/*


//                            OBJETOS DENTRO DE OBJETOS

Acessando objetos dentro de objetos {{ }}
const donoDoPet = {
 nome: "Vitor Hugo",
 pet: {
 nomeDoPet: "Wanda",
 raca: "Vira-lata",
 idade: 1
}
}

console.log(donoDoPet.pet.nomeDoPet) 
*/

//                   ACESSANDO ARRAYS DENTRO DE OBJETOS {[ ]}

/*
const curso = {
 nome: "Noturno Frontend",
 linguagens: ["JS", "CSS", "HTML"]
}

console.log(curso.linguagens[0])
*/

//                  ARRAY DE OBJETOS [{ }]

/*
// NO SEGUINTE EXEMPLO, TEMOS UM ARRAY CONTENDO TRÊS OBJETOS

const professores = [
 {nome: "Andrei", modulo: 1},
 {nome: "Vitor", modulo: 2},
 {nome: "Mina", modulo: 3}
]

console.log(professores[1].nome)
*/

//                  ADICIONANDO PROPRIEDADES NO OBJETO

/*
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
   }

   curso.numeroEstudantes = 50 // Adicionando propriedade ao objeto

   console.log(curso)
*/



// EXERCÍCIO 3
// Adicione ao objeto do exercício 1 uma lista com os nomes dos personagens do filme.
// Acesse e imprima a primeira pessoa do elenco e seu respectivo personagem. 
// Altere a primeira pessoa do elenco por "Xuxa".
// Imprima no console todas as propriedades do objeto.

/*
let filme = {
    direcao: "Mauro Lima",
    ano: 2008,
    nome: "Meu nome não é Johnny",
    elenco: ["Selton Melo", "Cléo Pires", "Cassia Kiss", "Júlia Lemmertz"],
    jaViu: true,
}

    filme.personagens = ["João Guilherme Estrella", "Sofia", "Laura", "Juninho"]
    console.log(`O personagem de ${filme.elenco[0]} é o ${filme.personagens[0]}`)

    filme.elenco[0] = "Xuxa" 
    console.log(filme)
*/

/* 
                      EXERCÍCIO 4

● Crie uma função que receba um objeto de pessoa (Exercício 2) e
crie um novo objeto mantendo as propriedades originais e
acrescentando:
○ Uma propriedade com a lista de suas comidas preferidas;
○ Uma propriedade que seja um objeto, com nome e idade, para
representar o melhor amigo da pessoa.
● Ainda na função, imprima no console as propriedades desse objeto
seguindo o modelo abaixo:
"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e
___. Seu melhor amigo se chama ___ e tem ___ anos"
*/

/*


let primeiraPessoa = {
    nome: "Guilherme",
    idade: 28,
    genMusical: "Rock",
}

function receberObjeto() {
       let pessoaAdd = {
         ...primeiraPessoa,
        comidas: ["Pizza", "Hamburger","Churrasco", "Sushi"],
        melhorAmigo: {
            nomeAmigo: "Vítor",
            idadeAmigo: 27,
        }    
       }
    console.log(`O nome da pessoa é ${pessoaAdd.nome} e suas comidas preferidas são ${pessoaAdd.comidas}. Seu melhor amigo se chama ${pessoaAdd.melhorAmigo.nomeAmigo} e tem ${pessoaAdd.melhorAmigo.idadeAmigo} anos.`)
}

receberObjeto(primeiraPessoa)

*/

// <<<<<<<<<<<<<<<<<<<< EXERCÍCIOS DE REVISÃO >>>>>>>>>>>>>>>>>>>>

// EXERCÍCIO 1: 

/*
let anoDeNascimento = 1995
let anoAtual = 2023

let idade = anoAtual - anoDeNascimento

console.log(idade)
*/


// EXERCÍCIO 2: 

/*
let numero1 = 10
let numero2 = 20
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let modulo = numero1 % numero2

console.log("A soma dos números 10 e 20, é: ", soma)
console.log("A subtração dos números 10 e 20, é: ", subtracao)
console.log("A multiplicação dos números 10 e 20, é: ", multiplicacao)
console.log("A divisão dos números 10 e 20, é: ", divisao)
console.log("O resto da divisão entre os números 10 e 20, é: ", modulo)
*/

// EXERCÍCIO 3: 
/*
let numero1 = 10
let numero2 = 20

console.log("10 é igual a 20?", numero1 === numero2)
console.log("10 é diferente de 20?", numero1 !== numero2)
console.log("10 é maior que 20?", numero1 > numero2)
console.log("10 é maior ou igual a 20?", numero1 >= numero2)
console.log("10 é menor que 20?", numero1 < numero2)
console.log("10 é menor ou igual a 20?", numero1 <= numero2)
*/

//EXERCÍCIO 4:
/*
let temIdadeParaDirigir = true
let temCarteiraDeMotorista = true
let temCarroProprio = true

console.log(temIdadeParaDirigir && temCarteiraDeMotorista)
console.log(temCarroProprio || temCarteiraDeMotorista)
console.log(!temIdadeParaDirigir || !temCarteiraDeMotorista) 
*/

//EXERCÍCIO 5: 
/*
let nomes = [" Guilherme ", " Jonathan ", " Gustavo "]

console.log(nomes[0].toLowerCase())
console.log(nomes[1].toLowerCase())
console.log(nomes[2].toLowerCase())
console.log(nomes[0].toUpperCase())
console.log(nomes[1].toUpperCase())
console.log(nomes[2].toUpperCase())
console.log(nomes[0].trim())
console.log(nomes[1].trim())
console.log(nomes[2].trim())
console.log(nomes[0].includes("a"))
console.log(nomes[1].includes("a"))
console.log(nomes[2].includes("a"))
console.log(nomes[0].replaceAll("a", "#"))
console.log(nomes[1].replaceAll("a", "#"))
console.log(nomes[2].replaceAll("a", "#"))
*/

//EXERCÍCIO 6: 
/*
let nome = "Guilherme"
let idade = 28
let cidade = "São Leopoldo"

let mensagem = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`

console.log(mensagem)
*/

//EXERCÍCIO 7: 
/*
let aluno = {
    nome: "Guilherme",
    idade: 28,
    curso: "Javascript",
}

console.log(aluno)

// PARTE 2

aluno.notas = []

aluno.notas.push(7.8, 8.2, 6.66)

 let media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]) /3

console.log(media)
*/

// PARTE 3
/*
let aluno = {
    nome: "Guilherme",
    idade: 28,
    curso: "Javascript",
    endereco: {
        paisOndeMora: "Brasil",
        anoNaEscola: "Concluiu",
        cidade: "São Leopoldo"
    }
}

console.log(aluno)
*/

// <<<<<<<<<<<<<<<<<<<< CONDICIONAIS >>>>>>>>>>>>>>>>>>>>

/*
if (1 === 2) {
    console.log('Os números são iguais.')
} else {
    console.log('Os números não são iguais.')
}
*/

//EXERCÍCIO 1:
/*
let numero1 = 156
let numero2 = 248

if (numero1 > numero2) { 
    console.log(`${numero1} é maior que ${numero2}`)
} 
else if (numero1 < numero2) {
    console.log(`${numero1} é menor que ${numero2}`)
} 
else {
    console.log(`${numero1} é igual a ${numero2}`)
}
*/

//Exercício 4
/*
let pokemonInicial = "Charmander"

if (pokemonInicial === "Bulbasauro") {
    console.log("Seu POKEMON é do tipo: Planta e Veneno")
} else if (pokemonInicial === "Charmander") {
    console.log("Seu POKEMON é do tipo: Fogo")
} else {
    console.log("Seu POKEMON é do tipo: Água")
}
*/

//        ********************SWITCH CASE********************

let pokemonInicial = "Charmander"

switch (pokemonInicial) {
    case 'Bulbasauro': 
        console.log("Seu POKEMON é do tipo: Planta e Veneno")
        break
    case 'Squirtle':
        console.log("Seu POKEMON é do tipo: Água")
        break
    case 'Charmander':
        console.log("Seu POKEMON é do tipo: Fogo")
        break
    default:
        console.log("POKEMON não localizado")
        break
}