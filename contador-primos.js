/* cuenta cantidad de números primos entre a y b*/

function primesCounter(a, b){
    let counter = 0;
    let primeCounter = 0;

    for(let i = a; i <= b; i++){
        
        for(let y = 1; y <= b; y++){
            if(i % y === 0){
                counter++;
            }
        }

        if(counter === 2 && i !== 1){
            primeCounter++;
        }

        counter = 0;
    }

    return `There are ${primeCounter} prime numbers between ${a} and ${b}`;
}

console.log(primesCounter(0, 10000));