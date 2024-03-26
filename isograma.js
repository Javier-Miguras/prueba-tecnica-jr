/* Isograma

Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

    Un string vacío es un isograma.
    La función tiene que ser case insensitive e ignorar acentos.
    Si el string tiene mas de una palabra retornar false.
    Se tiene que hacer clean up del string antes de comparar.

Ejemplos:

func("Murciélago"); // returns true
func("reto"); // returns false
func("Casa"); // returns false
func("PeRrO"); // returns false
func("GaTo"); // returns true */

function isograma(word){

    if(word === ""){
        return true;
    }

    if(word.trim().split(/\s+/).length > 1){
        return false;
    }

    word = word.toLowerCase();
    normalizedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g,"").split(""); 

    for(let i = 0; i < normalizedWord.length; i++){

        let counter = 0;

        for(let y = 0; y < normalizedWord.length; y++){
            
            if(normalizedWord[i] === normalizedWord[y]){
                counter++;
            }
        }

        if(counter > 1){
            return false;
        }
    }

    return true;
}

console.log(isograma('Murciélago'));