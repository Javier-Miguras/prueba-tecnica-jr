/* Continentes representados

Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup. La función debe devolver true si existe al menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

Nota: Los continentes siempre estarán presentes y escritos correctamente.

Ejemplo:

continentesRepresentados([
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
]); // true

Bonus:

    Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa y escribir los tests necesarios
    Hacer otra función que retorne el mismo array pero con una nueva propiedad greeting que contenga el valor Hi < firstName here >, what do you like the most about < language here >? y escribir los tests necesarios
    Hacer otra función que liste los lenguajes representados, sin repetir y escribir los tests necesarios
 */

function representedContinents(devs){

    let af = 0;
    let am = 0;
    let as = 0;
    let eu = 0;
    let oc = 0;
    
    devs.forEach(dev => {
        switch (dev.continent) {
            case 'Africa':
                af++;
                break;

            case 'Americas':
                am++;
                break;

            case 'Asia':
                as++;
                break;

            case 'Europe':
                eu++;
                break;

            case 'Oceania':
                oc++;
                break;
        
            default:
                break;
        }
    });

    if(af < 1 || am < 1 || as < 1 || eu < 1 || oc < 1){
        return false;
    }

    return true;
}

//Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa y escribir los tests necesarios
function euJsDevsNumber(devs){
    euJsDevs = 0;

    devs.forEach(dev => {
        if(dev.language === 'JavaScript' && dev.continent === 'Europe'){
            euJsDevs++;
        }
    });

    return `Number of JS Devs from Europe: ${euJsDevs}`;

}

// Hacer otra función que retorne el mismo array pero con una nueva propiedad greeting que contenga el valor Hi < firstName here >, what do you like the most about < language here >? y escribir los tests necesarios
function addGreetingProperty(devs){
    devs.forEach(dev => {
        dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
    });

    return devs;
}

//Hacer otra función que liste los lenguajes representados, sin repetir y escribir los tests necesarios
function representedLanguges(devs){
    languages = [];

    // devs.forEach(dev => {
    //     if(!languages.includes(dev.language)){
    //         languages.push(dev.language);    
    //     }
    // });

    for(let i = 0; i < devs.length; i++){

      if(!languages.includes(devs[i].language)){
        languages.push(devs[i].language);    
      }

    }

    return languages;
}


console.log(representedLanguges([
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
    {
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C",
    },
    {
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 39,
      language: "Ruby",
    },
    {
        firstName: "Edmundo",
        lastName: "F.",
        country: "Italia",
        continent: "Europe",
        age: 35,
        language: "JavaScript",
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 65,
      language: "PHP",
    },
    {
        firstName: "Laura",
        lastName: "D.",
        country: "Francia",
        continent: "Europe",
        age: 27,
        language: "JavaScript",
    }
  ]));