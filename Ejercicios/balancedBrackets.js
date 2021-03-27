/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){
    var stack = [];
    var isBalanced = true;
    for (const character of s) {
        if (character == '{' || character == '[' || character == '(') {
            stack.push(character)
        } else {
            switch (character) {
                case '}':
                    openBracket = stack.pop()
                    if (openBracket != '{') {
                        isBalanced = false
                    }
                    break;
                case ']':
                    openBracket = stack.pop()
                    if (openBracket != '[') {
                        isBalanced = false
                    }
                    break
                case ')':
                    openBracket = stack.pop()
                    if (openBracket != '(') {
                        isBalanced = false
                    }
                    break
            }
        }

        if (!isBalanced) {
            return isBalanced;
        }
    }

    return isBalanced;

};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);