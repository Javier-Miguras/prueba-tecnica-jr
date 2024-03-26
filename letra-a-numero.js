/* Letras por números

Reemplazar las letras de un string por su index en el alfabeto (e.g. A = 1 , B = 2 , C = 3 ...)

Consideraciones Adicionales:

    Ignorar espacios.
    Hacer clean up del string antes de comenzar el swap (para eliminar acentos y caracteres especiales, se sugiere meter en este proceso de clean up el ignorado de espacios).

Ejemplo:

func("abc def"); // returns '1 2 3 4 5 6'; */

function letraANumero(letters){

    const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

   sanitizedLetters = letters.trim().replace(/\s/g, "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

   //console.log(sanitizedLetters);

    if(sanitizedLetters.length > 1){
        
        numbersOutput = '';

        letterArray = sanitizedLetters.split('');

        letterArray.forEach(element => {
            numbersOutput += " " + alphabet[element];
        });

        console.log(numbersOutput);

    }else{
        console.log(alphabet[sanitizedLetters]);
    }
}

letraANumero('abá     Cdy   f');