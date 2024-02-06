//Mostrar el contenido de una array en formato
let arrayNumeros = [1, 2, 3, 4, 5];

function arrayToString(array) {
  let resultado = "";
  array.forEach((elemento, index) => {
    if (index == 0) {
      resultado += "[" + elemento;
    } else if (index == array.length - 1) {
      resultado += ", " + elemento + "]";
    } else {
      resultado += ", " + elemento;
    }
  });
  return resultado;
}

function arrayToString2(array) {
  let resultado = "[";
  array.forEach((elemento, index) => {
    resultado += index === 0 ? elemento : ", " + elemento;
  });
  resultado += "]";
  return resultado;
}

function arrayToString3(array) {
  return "[" + array.map((elemento) => elemento.toString()).join(", ") + "]";
}

function arrayToString4(array) {
  return "[" + array.join(", ") + "]";
}

console.log(arrayToString(arrayNumeros)); //[1, 2, 3, 4, 5]
console.log(arrayToString2(arrayNumeros)); //[1, 2, 3, 4, 5]
console.log(arrayToString3(arrayNumeros)); //[1, 2, 3, 4, 5]
console.log(arrayToString4(arrayNumeros)); //[1, 2, 3, 4, 5]
