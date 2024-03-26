/* Gira sarbalap

Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras de cinco o más letras invertidas (como el nombre de esta Kata). Las cadenas pasadas solo consistirán en letras y espacios. Los espacios solo se incluirán cuando haya más de una palabra presente.
Ejemplos

girar("Hola como estás"); // => "Hola como sátes"
girar("Esto es una prueba"); // => "Esto es una abeurp" */

function turnSdrow(words){

    wordsArray = words.split(' ');
    revWordsArray = [];

    wordsArray.forEach(word => {
        if(word.length >= 5){
            word = word.split('').reverse().join('');
            revWordsArray.push(word);
        }else{
            revWordsArray.push(word);
        }

    });

    return revWordsArray.join(' ');

    
}

console.log(turnSdrow("Esto es una prueba"));