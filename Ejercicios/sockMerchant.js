/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks) {

    colorSocks.sort(function(a, b) {return a-b});

    var countPairs = 0;

    while (colorSocks.length > 0) {
        let sock = colorSocks[0];
        let count = countElements(sock, colorSocks);

        count = count / 2
        count = Math.floor(count);

        if (count > 0) {
            countPairs = countPairs + count;
        }

        colorSocks = removeElement(sock, colorSocks);
    }

    return countPairs;
}

function countElements(sock, colorSocks) {
    var count = 0
    for (var i = 0; i < colorSocks.length; i++) {
        if (sock == colorSocks[i]) {
            count = count + 1
        } else {
            break;
        }
    }

    return count;
}

function removeElement(sock, colorSocks) {
    var i = 0;
    while (i < colorSocks.length) {
      if (colorSocks[i] === sock) {
        colorSocks.splice(i, 1);
      } else {
        ++i;
      }
    }
    return colorSocks;
  }

// TESTS
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);