const calculoDosQuadrados = (num1, num2, num3, num4) => {
    let quadrados = [num1**2, num2**2, num3**2, num4**2]
    let soma = 0;
  
    for (let i = 0; i < quadrados.length; i++) {
      soma += quadrados[i];
    }
    console.log("A soma dos quadrados dos números digitados é: " + soma);
  }
  
  var num1 = 2
  var num2 = 4
  var num3 = 6
  var num4 = 4
  
  calculoDosQuadrados(num1, num2, num3, num4)