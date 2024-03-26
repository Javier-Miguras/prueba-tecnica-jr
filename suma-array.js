function sumarDos(numeros, resultado){
    //Recorrer el array de números
     for(i = 0; i < numeros.length; i++){
        //Calcular el segundo valor para devolver
        let primerNumero = numeros[i];
        let segundoNumero = resultado - numeros[i];

        //Comprobar si existe en array segundoNumero que sumado al primerNumero de el resultado y compobar que además sea diferente al actual
        if(numeros.includes(segundoNumero) && segundoNumero != primerNumero){
            //Solo si se cumple la condicion devolver un array con el número actual y el segundo número que he calculado
            let resultado = [primerNumero, segundoNumero];
            console.log(resultado);
            return resultado;
        }

     }

}

sumarDos([5, 3, 1, 8, 6], 9);