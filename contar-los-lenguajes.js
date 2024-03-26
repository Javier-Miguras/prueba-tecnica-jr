/* Contar los lenguajes

Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que cuente la cantidad de desarrolladores que hay para cada lenguaje.

const desarrolladores = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

// => { C: 2, JavaScript: 1, Ruby: 1 }

 */

const desarrolladores = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
    },
  ];
  
  
  function countLanguages(devs){

    let languages = {};

    devs.forEach(dev => {
        if(!(dev.language in languages)){
            languages[dev.language] = 1;
        }else{
            languages[dev.language]++;
        }
    });

    return languages;
  }

  console.log(countLanguages(desarrolladores));