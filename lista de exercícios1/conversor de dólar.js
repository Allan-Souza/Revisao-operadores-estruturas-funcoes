const conversorDolarParaReal = (cotacaoDolar, valorDolar, valorConvertido) => {
    var valorDolar = parseFloat(prompt("Digite um valor em dolar"))
    var cotacaoDolar = parseFloat(prompt("digite a cotação do dolar atualmente"))
    valorConvertido = valorDolar * cotacaoDolar
    console.log(valorConvertido.toFixed(2));
  }
  
  conversorDolarParaReal()