function pecas(codePeca, valorPeca, qtdPeca) {
    let calculo = qtdPeca * valorPeca
    console.log(qtdPeca + " peças de código: " + codePeca + " custará: " + calculo )
  }
  
  let codigo = parseInt(prompt("digite o código do produto"))
  let valor = parseInt(prompt("digite o valor do produto"))
  let qtd = parseInt(prompt("digite a quantidade do produto"))
  
  pecas(codigo, valor, qtd)