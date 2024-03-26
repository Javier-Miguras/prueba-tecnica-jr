/* Encontrar al impar

Dado un arreglo de números enteros, encontrar aquel que aparece un número impar de veces.

[7]; // => 7, porque aparece 1 vez (que es impar).
[0]; // => 0, porque aparece 1 vez (que es impar).
[1, 1, 2]; // => 2, porque aparece 1 vez (que es impar).
[0, 1, 0, 1, 0]; // => 0, porque aparece 3 veces (que es impar).
[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]; // => 4, porque aparece 1 vez (que es impar). */

function findTheOdd(numbers){

    let oddTimesNumbers = [];
    let counter = 0;

    numbers.forEach(number => {
        
        for(let i = 0; i < numbers.length; i++){

            if(number === numbers[i]){
                counter++;
            }
        }

        if(counter % 2 !== 0 && !oddTimesNumbers.includes(number)){
            oddTimesNumbers.push(number);
        }
        counter = 0;

    });

    return oddTimesNumbers;
}

console.log(findTheOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));