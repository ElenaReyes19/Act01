/*
Const
Las variables declaradas con const mantienen valores 
constantes. Las declaraciones const tienen similitudes con 
las declaraciones let.

Las declaraciones const tienen un ámbito de bloque.
Al igual que las declaraciones let, solamente se puede
acceder a las declaraciones const dentro del bloque en 
el que fueron declaradas.

const no puede modificarse ni volver a declararse.
Esto significa que el valor de una variable declarada 
con const es el mismo dentro de su ámbito. No se puede
actualizar ni volver a declarar. Así que si declaramos
una variable con const, no podemos hacer esto:
*/

const saludar = "dice Hola";
saludar = "dice Hola también"; // error: Assignment to constant variable.

// Por lo tanto, toda declaración const debe ser inicializada en el momento de la declaración.

// Este comportamiento es algo diferente cuando se trata de objetos declarados con const. Mientras que un objeto const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar. Como resultado, si declaramos un objeto const como este:

const saludo = {
  mensaje: "dice Hola",
  tiempos: 4
};

// mientras que no podemos hacer esto:

saludo = {
  mensaje: "Hola",
  tiempos: 5
}; // error: Assignment to constant variable.

// podemos hacer esto:

saludo.mensaje = "dice Hola también";
// Esto actualizará el valor de saludo.mensaje sin devolver errores.

/*
Hoisting de const
Al igual que let, las declaraciones const se
elevan a la parte superior, pero no se inicializan.
*/

var controlador = true;
if (controlador) {
  // Declaración de variables con const, let y var
  const a = 1;
  let b = 2;
  var c = 3;
}
// Intentar reasignar los valores de las variables
a = 4; // error: Assignment to constant variable.
b = 5; // error: b is not defined.
c = 6; // Se permite la reasignación, mostrando "var y" su flexibilidad.
