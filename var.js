/*
El ámbito es global cuando una variable var se declara fuera de una función. 
Esto significa que cualquier variable que se declare con var fuera de una 
función está disponible para su uso en toda la pantalla.

var tiene un ámbito local cuando se declara dentro de una función. Esto significa 
que está disponible y solo se puede acceder a ella dentro de esa función
*/

var saludar = "hey, hola";

function nuevaFuncion() {
  var hola = "hola";
}

/*
Aquí, saludar tiene un ámbito global porque existe fuera de la función 
mientras que hola tiene un ámbito local. Así que no podemos acceder a la
 variable hola fuera de la función. Así que si realizamos esto:
*/

var tester = "hey, hola";

function nuevaFuncion() {
  var hola = "hola";
}
console.log(hola); // error: hola is not defined

/*
Las variables con var se pueden volver a declarar y modificar.
Esto significa que podemos hacer esto dentro del mismo ámbito 
y no obtendremos un error. 
*/

var saludar = "hey, hola";
var saludar = "dice Hola también";

// Y esto también

var saludar = "hey, hola";
saludar = "dice Hola también";

/*
Hoisting de var
Hoisting es un mecanismo de JavaScript en el que las variables 
y declaraciones de funciones se mueven a la parte superior de su 
ámbito antes de la ejecución del código. Esto significa que si hacemos esto:
*/

console.log(saludar); // undefined
var saludar = "dice hola";

// se interpreta así:

var saludar;
console.log(saludar); // undefined
saludar = "dice hola";

/* Problema con var
Hay una debilidad que viene con var. Usaré el ejemplo de abajo para explicarlo:
*/

var saludar = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
  var saludar = "dice Hola también";
}

console.log(saludar); // "dice Hola también"

/* Por lo tanto, como tiempos > 3 devuelve true, saludar se redefine
 para "dice Hola también". Aunque esto no es un problema si quieres
  redefinir saludar a conciencia, se convierte en un problema cuando
   no te das cuenta de que la variable saludar ha sido definida antes.

Si has utilizado saludar en otras partes de tu código, puede que
 te sorprenda la salida que puedes obtener. Esto probablemente causará
  muchos errores en tu código. Por eso son necesarios let y const.
*/

// Otro ejemplo con var
function myFunction() {
  var a = 1;
  if (a === 1) {
    var b = 2;
    console.log(b); // 2
  }
  console.log(b); // 2
}

// imprimiendo myFunction
myFunction();

/*
Además, var no tiene un ámbito de bloque, lo que significa que
una variable declarada con var es accesible desde cualquier lugar
del código, incluso dentro de bloques if, for, etc. Esto puede llevar 
a problemas de ámbito y resultar en errores difíciles de depurar.
*/

