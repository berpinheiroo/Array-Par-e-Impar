/* Faça um algoritmo que receba 10 números inteiros e armazene-os em um array.
Depois armazene em um array PAR todos os números que forem pares, e em um
array IMPAR os que forem ímpares, no final exiba os três vetores. */

var num = []
var par = []
var impar = []

contadorNum = 0
contadorPar = 0
contadorImpar = 0
while (contadorNum < 3) {
    num[contadorNum] = prompt("Insira um numero")
    if (num[contadorNum] % 2 == 0) {
        par[contadorPar] = num[contadorNum]
        contadorPar++
    } else {
        impar[contadorImpar] = num[contadorNum]
        contadorImpar++
    }
    contadorNum++
}

console.log("Os numeros inseridos foram:", num)
console.log("Numeros pares:", par)
console.log("Numeros impares:", impar)

