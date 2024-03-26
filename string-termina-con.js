/* String termina con

Hacer una función que reciba 2 strings (siempre los va a recibir), y devuelva si el primero termina con el segundo. Ejemplos:

func("abc", "bc"); // returns true
func("abc", "d"); // returns false 

node string-termina-con.js*/

function stringEndsWith(string1, string2){

    //Convertir los string a array
    array1 = string1.split("");
    array2 = string2.split("");

    let y = array2.length - 1;

    //Crear un nuevo array que contenga las ultimas letras de string1, su largo debe ser el mismo de array2

    lastFromArray1 = [];

    for(let i = array1.length - 1; i >= array1.length - array2.length; i-- ){

        lastFromArray1[y] = array1[i];

        y--;
    }

    //Convertir el nuevo array en string y compararlo con string 2
    if(lastFromArray1.join('') === string2){
        return true;
    }else{
        return false;
    }

}

console.log(stringEndsWith('chinpokomon', 'mon'));

/* 

    VERSIÓN SIMPLIFICADA

    function stringEndsWith(string1, string2) {
    // Extraer la parte del string1 que tiene la misma longitud que string2
    const lastPart = string1.slice(-string2.length);

    // Comparar con string2
    return lastPart === string2;
    }

    console.log(stringEndsWith('abc', 'bc'));  // Devuelve true
    console.log(stringEndsWith('abc', 'd'));   // Devuelve false
    console.log(stringEndsWith('chinpokomon', 'mon'));  // Devuelve true


*/