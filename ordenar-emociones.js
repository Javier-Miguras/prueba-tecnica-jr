/* Ordenar emociones

Tendrás una función llamada "ordenarEmociones" que devolverá un arreglo de emociones ordenadas. Tiene dos parámetros, el primer parámetro llamado "emociones" esperará un arreglo de emociones donde una emoción será una de las siguientes:

":D" -> Súper Feliz
":)" -> Feliz
":|" -> Normal
":(" -> Triste
"T_T" -> Súper Triste

Y el segundo parámetro se llama orden, si este parámetro es true, entonces el orden de las emociones será descendente (de Súper Feliz a Súper Triste), si es false, entonces será ascendente (de Súper Triste a Súper Feliz)

Ejemplo si el orden es true con el arreglo anterior:

[":D", ":)", ":|", ":(", "T_T"]; // => Súper Feliz -> Feliz -> Normal -> Triste -> Súper Triste

Si orden es false:

["T_T", ":(", ":|", ":)", ":D"]; // => Súper Triste -> Triste -> Normal -> Feliz -> Súper Feliz

Ejemplo:

arr = [":D", ":|", ":)", ":(", ":D"];
ordenarEmociones(arr, true); // [ ":D", ":D", ":)", ":|", ":(" ]
ordenarEmociones(arr, false); // [ ":(", ":|", ":)", ":D", ":D" ]

Notas

    El arreglo podría estar vacío, en ese caso devuelve el mismo arreglo vacío
    Todas las emociones serán válidas
 */

    function orderEmotions(emotions, order) {
        const emotionsList = {
            ':D': "Súper Feliz",
            ':)': "Feliz",
            ':|': "Normal",
            ':(': "Triste",
            'T_T': "Súper Triste"
        }
    
        emotions.sort((a, b) => {
            const indexA = Object.keys(emotionsList).indexOf(a);
            const indexB = Object.keys(emotionsList).indexOf(b);
    
            if(order) {
                return indexB - indexA;
            } else {
                return indexA - indexB;
            }
        });
    
        return emotions;
    }
    
    const arr = [":D", ":|", ":)", ":(", ":D"];
    console.log(orderEmotions(arr, true));
    console.log(orderEmotions(arr, false));
    