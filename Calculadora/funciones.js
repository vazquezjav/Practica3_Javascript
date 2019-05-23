
var bas
var exp
function raiz(){
   // var operando = document.calculadora.resultado.value
    var result = eval(Math.sqrt(document.calculadora.resultado.value))
    document.calculadora.resultado.value = result
}
function elevar(){
    var base = document.calculadora.resultado.value
    var result = eval(1/base)
    document.calculadora.resultado.value = result
}
function calcula(){
    var operando = document.calculadora.resultado.value
    var result = eval(operando)
    document.calculadora.resultado.value = result
}
function exponente(){
    var operando = document.calculadora.resultado.value
    var resultado = eval(operando * operando)
    document.calculadora.resultado.value = resultado
}