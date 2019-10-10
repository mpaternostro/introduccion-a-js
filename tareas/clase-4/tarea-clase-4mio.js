// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

const multiplo = 3;
const limite = 22;
function imprimirMultiplos(numeroMultiplo, numeroLimite) {
    let i;
    console.log(`Imprimiendo múltiplos de ${numeroMultiplo} hasta llegar a ${numeroLimite}`);
    for (i = numeroMultiplo; i <= numeroLimite; i += numeroMultiplo) {
        console.log(i);
    }
}

// imprimirMultiplos(multiplo, limite);


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numero;

function contarParaAbajo(a) {
    let i = 10;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

// contarParaAbajo(numero);

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

const numeroInicial = 1;
const numeroFinal = 50;

function fizzBuzzMuchosIf(inicio, final) {
    const Fizz = 3;
    const Buzz = 5;
    const cero = 0;
    /* está bueno trabajar con muchas variables en vez de número fijos, 
    pero no tiene sentido poner cero = 0, no? Cero siempre va a ser cero...*/
    for (let i = inicio; i <= final; i++) {
        if (cero === i % Fizz && cero === i % Buzz) {
            console.log("FizzBuzz");
        } else if (cero === i % Fizz) {
            console.log("Fizz");
        } else if (cero === i % Buzz) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function fizzBuzz(inicio, final) {
    const Fizz = 3;
    const Buzz = 5;
    const cero = 0;
    /* está bueno trabajar con muchas variables en vez de número fijos, 
    pero no tiene sentido poner cero = 0, no? Cero siempre va a ser cero...*/
    for (let i = inicio; i <= final; i++) {
        let print = "";
        if (cero === i % Fizz){
            print += "Fizz";
        }
        if (cero === i % Buzz){
            print += "Buzz";
        }
        console.log(print || i );
    }
}

// fizzBuzzMuchosIf(numeroInicial, numeroFinal);
// fizzBuzz(numeroInicial, numeroFinal);

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio (grupoNumeros){
    let i = 0;
    let sumaNumeros = 0;
    while ( i < grupoNumeros.length){
        sumaNumeros += grupoNumeros[i];
        i++;
    }
    console.log((sumaNumeros / grupoNumeros.length).toFixed(2));
}

const numerosRandom = [1, 5, 3, 2, 7, 4, 11, 5332, 4];

// calcularPromedio(numerosRandom);
