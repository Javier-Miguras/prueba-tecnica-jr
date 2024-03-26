//Con funciones

function esPalindromoFunciones(palabra){
    let invertida = palabra.split("").reverse().join("");


    return (invertida === palabra);
}

//console.log(esPalindromoFunciones("ana"));

//Usando solo estructuras de control

function esPalindromo(palabra){
    //Dividir string en array
    let palabraArray = [];
    

    for(i = 0; i < palabra.length; i++){
        palabraArray[i] = palabra[i];
    }

    //Invertir array con bucle
    let palabraInvertidaArray = [];
    let y = 0;

    for(i = palabraArray.length - 1; i >= 0; i--){
        palabraInvertidaArray[y] = palabraArray[i];

        y++;
    }

    //Unir las letras del array con bucle y guardar resultado en variable
    let palabraInvertida = "";

    for(i = 0; i < palabraInvertidaArray.length; i++){
        palabraInvertida += palabraInvertidaArray[i];
    }

    //devolver resultado
    return palabraInvertida === palabra;
    
}

console.log(esPalindromo("ana"));