var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.5
var valorEmRealFixado = (valorEmReal).toFixed(2)

alert(valorEmRealFixado)