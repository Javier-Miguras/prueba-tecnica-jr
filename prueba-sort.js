array1 = ['caca', 'pichi', 'hoyo', 'sangre'];
array2 = [12, 65, 896, -45, -22];

//console.log(array1.sort());
//console.log(array2.sort(function(a, b){return a - b}));

//Ordenar objeto
const objeto = {
    casa: 22,
    lechuga: 45,
    google: -34,
    microbio: 32,
    sabrina: -2
};

function orderKeysAlph(objetoToOrder){
    const clavesOrdenadas = Object.keys(objetoToOrder).sort();

    const objetoOrdenadoPorClaves = {};
    clavesOrdenadas.forEach(key => {
        objetoOrdenadoPorClaves[key] = objetoToOrder[key];
    });

    console.log(objetoOrdenadoPorClaves);

}

orderKeysAlph(objeto);