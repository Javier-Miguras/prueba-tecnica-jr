/* Mover los ceros al final

Escribir una función que tome un array de valores y retorne el mismo array pero moviendo los ceros al final.

Ejemplo:

moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]

Bonus: Implementar la función sin usar una variable de contador */

function moveZeros(array){
    //Podemos iterar sobre el array sin usar una variable de contador con un for...of o un foreach.
    let nonZeros = [];
    let zeros = [];

    //Con foreach:
    /*array.forEach(element => {
        if(element === 0){
            zeros.push(element);
        }else{
            nonZeros.push(element);
        }
    });*/

    //Con for...of
    for(const element of array){
        if(element === 0){
            zeros.push(element);
        }else{
            nonZeros.push(element);
        }
    }

    return nonZeros.concat(zeros);

}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));