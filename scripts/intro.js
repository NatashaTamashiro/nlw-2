// Site https://codepen.io/

//comments
document.write("Hello")

// variaveis, tipos de dados

var myvar = " Hello var "
const myconst = " Hello const "

document.write(myvar + myconst)

//string
const s1= " Uma string com aspas duplas "
const s2= ' Uma string com aspas simples '
const s3= ` Uma string com crases `	
 
document.write(s2)

//number
const n1 = 1
const n2 = 12

document.write( n1 + n2 )

// boolean - true or false
const bTrue = true
const bFalse = false

document.write(bFalse)

//objeto
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){
    return "run Barry,run!"
  }
}
document.write(pessoa.altura)
document.write(pessoa.idade)
document.write(pessoa.solteiro)
document.write(pessoa.correr())

// array = vetor (coleção de dados)
const colecao = [" blue "," green ", 2, {name:" My name "}]

document.write(colecao[0])
document.write(colecao[1])
document.write(colecao[2])
document.write(colecao[3].name)


//Funções / Funcionalidades / Reuso de código
//Registrar função
function sayMyName(name){
  document.write(name)
}
// Executar
sayMyName(" Douglas ")
sayMyName(" Valeska ")
sayMyName(" Kyam ")


// Condicionais
const notaFinal = 7

if( notaFinal < 5 ){
  //caminho 1
  document.write("Reprovado")
}else{
  //caminho 2
  document.write("Aprovado")
}

// Loop / Repetições
for ( i=0; i <10; i++ ){
  document.write("<p> Hello </p>")
}

// Loop / Repetições
for ( i=0; i <10; i++ ){
  document.write(`<p> ${i} </p>`)
}