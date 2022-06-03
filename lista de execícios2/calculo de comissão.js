const pagamentoComissao = (idtVendedor, codePeca, precoUniPeca, qtdVendida) => {
    let comissao = qtdVendida * 5/100
    console.log("A comissão do vendedor de número " + idtVendedor + " Será de: " + comissao + "R$")
    return comissao
  }
  
  let idtVendedor = parseInt(prompt("Digite o número de identificação do vendedor"));
  let codePeca = parseInt(prompt("Digite o código da peça"));
  let precoUniPeca = parseFloat(prompt("Digite o preço da peça"));
  let qtdVendida = parseInt(prompt("Digite a quantidade de peças vendidas"));
  
  pagamentoComissao(idtVendedor, codePeca, precoUniPeca, qtdVendida);