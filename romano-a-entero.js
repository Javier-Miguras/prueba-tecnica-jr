function romanoAEntero(romano){

    //Crear tabla con numero romanos y sus valores numéricos

    const tablaRomanos = {
        M: 100,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1

    };

    //Cear variable para almacenar resultado
    let resultado = 0;

    //Recorrer numero romano letra a letra
    for(let i = 0; i < romano.length; i++){
        //console.log( romano[i], tablaRomanos[romano[i]] );
        //Si la letra actual es la última o si el valor dl siguiente caracter es menor o igual al del actual, entonces añadimos el valor al resultado
        if(i === romano.length - 1 || tablaRomanos[romano[i + 1]] <= tablaRomanos[romano[i]]){
            resultado += tablaRomanos[romano[i]];
        }else{
            //Si no, restar el valor de la letra actual al resultado
            resultado -= tablaRomanos[romano[i]];

        }

    }

        

    //Devolver resultado
    return resultado;
}

console.log(romanoAEntero("XIV"));
console.log(romanoAEntero("CXX"));
console.log(romanoAEntero("XVII"));