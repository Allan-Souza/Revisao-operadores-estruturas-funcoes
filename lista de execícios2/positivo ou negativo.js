const positivoNegativo = (numero) => {
    do{
      if(numero > 0){
        console.log("Seu número é positivo")
      }else{
        console.log("Seu número é negativo")
      }
    }while(numero = 0)
  }
  
  positivoNegativo(parseInt(prompt("Digite um número")));