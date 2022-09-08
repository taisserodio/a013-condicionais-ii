const num = Number(prompt("Digite um numero qualquer"))


if ( num % 2 === 0 ) {
    console.log("Este numero é divisivel 2")
    if(num % 3 === 0){
        console.log("Este numero é divisive por 3")
    }else{
        console.log("Este numero não é divisivel por 3")
    }
} else {
    console.log('Este numero nao e divisivel por 2 ')
}



//# Exercício 1

//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
//Faça isso:
    
//1. Utilizando ifs aninhados
//    if(expressao){
//        if(expressao){
//
//        }
//    }


