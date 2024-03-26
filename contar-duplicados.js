/* Contar duplicados

Escribir una función que devuelva la cantidad de caracteres alfabéticos y dígitos numéricos distintos, sin distinguir entre mayúsculas y minúsculas, que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada solo contiene letras (mayúsculas y minúsculas) y dígitos numéricos.

"abcde" -> 0 // => ningún carácter se repite más de una vez
"aabbcde" -> 2 // => 'a' y 'b'
"aabBcde" -> 2 // => 'a' aparece dos veces y 'b' dos veces (b y B)
"indivisibility" -> 1 // => 'i' aparece seis veces
"Indivisibilities" -> 2 // => 'i' aparece siete veces y 's' dos veces
"aA11" -> 2 // => 'a' y '1'
"ABBA" -> 2 // => 'A' y 'B' aparecen dos veces cada uno */

function countDuplicates(string){
    let stringToArray = string.split("");
    let counter = 0;
    let DuplicatedCounter = 0;
    let seenCharacters = [];
    
    stringToArray.forEach((element, index) => {
        
        for(let i = 0; i < stringToArray.length; i++){
            if(element === stringToArray[i] && index != i && !seenCharacters.includes(element)){
                seenCharacters.push(element);
                counter++;
            }
        }

        if(counter >= 1){
            DuplicatedCounter++;
        }

        counter = 0;

    });

    console.log(DuplicatedCounter);
    
}

console.log(countDuplicates('abcde'));