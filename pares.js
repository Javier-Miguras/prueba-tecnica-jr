/* Elementos pares

Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces.

Ej.

["A","B","A","C","C","C","C"] // -> ["A","C"]
[1,2,3,1,2] // -> [1,2] */


function evenElements(elements){

    let even = [];

    for(let i = 0; i < elements.length; i++){

        let counter = 0;

        for(let y = 0; y < elements.length; y++){
            if(elements[i] === elements[y]){
                counter++;
            }
        }

        if(counter % 2 === 0){
            if(even.includes(elements[i])){
                continue;
            }else{
                even.push(elements[i]);
            }
        }
    }

    console.log(even);
}

evenElements([1, 2, 3, 1, 2, 5, 7, 2, 7, 1, 6, 1, 3]);
