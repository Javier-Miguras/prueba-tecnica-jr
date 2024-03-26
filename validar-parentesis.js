/* Validar paréntesis

Escribe una función que tome como parametro un string con paréntesis y determina si el orden de los paréntesis es válido. La función debería retornar true si es válido o false si no lo es.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */

function validateParentheses(input){
    inputToArray = input.split("");
    if(inputToArray[inputToArray.length - 1] === ')' && inputToArray[0] === '('){
        return true;
    }else{
        return false;
    }
}

console.log(validateParentheses("(())((()())())"));