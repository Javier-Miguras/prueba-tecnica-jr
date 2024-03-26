/* Marquesina

Tu familia tiene una tienda y acaban de adquirir una marquesina (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) para ayudar a conseguir más negocios.

La máquina funciona reemplazando el texto actual con un texto similar, pero con la primera letra desplazada al final; esto simula movimiento.

Tu padre está muy ocupado con el negocio como para preocuparse por esos detalles, así que, naturalmente, te hace responsable de crear los textos.

Crea una función llamada "marquesina()" que acepte una cadena de texto como argumento y devuelva un array de cadenas de texto, donde cada letra de la cadena de entrada sea rotada al final.

marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]

Nota

La cadena original debe estar incluida en el array de salida. El orden es importante. Cada elemento del array de salida debe ser la versión rotada del elemento anterior. */

//movimiento hacia la derecha
/*function marquee(word){
    let marqueeWords = [];
    let marqueeWord = [];
    let wordToArray = word.split('');

   for(let y = 0; y < wordToArray.length; y++){

        for(i = 0; i < wordToArray.length; i++){
            if(i ===  wordToArray.length - 1){
                marqueeWord.unshift(wordToArray[i]);
            }else{
                marqueeWord.push(wordToArray[i]);
            }
        }

        
        marqueeWordString = marqueeWord.join('');
        marqueeWords.push(marqueeWordString);

        wordToArray = marqueeWord;

        marqueeWord = [];

   }

   


    return marqueeWords;
    
}*/

//Manera simplificada

/*function marquee(word){
    let marqueeWords = [];
    wordToArray = word.split('');

    for(let i = 0; i < wordToArray.length; i++){

        //Quitar la última letra del array
        let lastLetter = wordToArray.pop();
        //Agregar la última letra al principio
        wordToArray.unshift(lastLetter);

        marqueeWords.push(wordToArray.join(''));
    }

    return marqueeWords;
}*/

//Movimiento hacia la izquierda
function marquee(word){
    let marqueeWords = [];
    wordToArray = word.split('');

    for (let i = 0; i < wordToArray.length; i++) {
        
        let firstLetter = wordToArray.shift();   // Quita la primera letra
        wordToArray.push(firstLetter);           // Agrega la primera letra al final

        marqueeWords.push(wordToArray.join('')); // Agrega la palabra actual al array
    }

    return marqueeWords;
}



console.log(marquee("Hola"));