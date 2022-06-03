const estoque = (qtdMin, qtdMax) => {
    let estoqueMedio = (qtdMin + qtdMax) / 2;
    console.log("Seu estoque médio é de: " + estoqueMedio);
    return estoqueMedio;
  }
  
  var qtdMin = parseFloat(prompt("Digite a quantidade mínima do seu estoque"));
  var qtdMax = parseFloat(prompt("Digite a quantidade máxima do seu estoque"));
  
  estoque(qtdMin, qtdMax);