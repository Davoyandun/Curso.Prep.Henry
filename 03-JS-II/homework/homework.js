// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var mayor = y
  if (x > y){
    mayor = x
  }
return mayor
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  ingreso = "Not allowed";
  if (edad >= 18){
    ingreso = "Allowed";
  }
  return ingreso;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por 
  // un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
var estado = "Offline"
  switch(status){
    case 1 : estado = "Online"
    case 2 : estado = "Away"
    default: estado = "Offline"
  }
  return estado 
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  var Saludo
  switch(idioma){
    case "aleman" : Saludo = "Guten Tag!"
    break;
    case "mandarin" : Saludo = "Ni Hao!"
    break;
    case "ingles" : Saludo = "Hello!"
    break;
    default: Saludo = "Hola!"
  }
  return Saludo  
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  let mensaje
  switch(color){
    case  "blue" : mensaje = "This is blue"
        break;
    case "red" : mensaje = "This is red"
    break;
    case "green" : mensaje = "This is green"
    break;
    case "orange" : mensaje = "This is orange"
    break;

    default: mensaje = "Color not found"

}
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  verificar = false 
}
if (numero == 10 || numero == 5){
  verificar = true
}
return verificar

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  rango = false; 
  if (numero > 20 && numero < 50 ){
    rango = true;
  }
  return rango;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  verificaEnteros = false
  if (numero == Math.floor(numero)){
    verificaEnteros = true
  }
  return verificaEnteros
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

var respuesta 

  if (numero % 3 == 0 && numero && 5 == 0 ){
    respuesta  = "fizzbuzz";
  }else if (numero % 3 == 0 ){
    respuesta = "fizz"
  }else if (numero % 5 == 0 ){
    respuesta = "buzz"
  } else {
    respuesta = numero
   }
   return respuesta

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  let mensaje 
  switch (num1,num2,num3) {
    case (num1 > (num2+mun3)) && Math.sign(num1)== +1 :
      mensaje = "Número 1 es mayor y positivo";
      break; 

      case Math.sign(num1) == -1||  Math.sign(num2)  == -1|| Math.sign(num3) == -1 :
      mensaje = "Hay negativos";
      break; 

      case num3 > num2 || num3 > num1 :
      mensaje = num3 + 1
      break;  
      case num3 == 0 || num2 == 0 || num == 1 == 0  :
      mensaje = "Error"; 
      break;  
  
    default:
      mensaje = false; 
      break;
  }
  return mensaje; 
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  primo= false
  if (numero == 0 || numero == 1){
    primo = false
  } else if (numero == 2 || numero == 3 || numero == 5 || numero == 7) {

    primo = true 
    
  } else {
    if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0 ){
      primo = false
    } else{
    primo = true 
  }
    
  }
  return primo 
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor == true ){
  leyenda = "Soy verdadero"

  }else {
   leyenda = "Soy falso"
  }
  return leyenda 
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  tabaMultiplicarSeis = [0,6,12,18,24,30,36,42,48,54,60] 
  return tabaMultiplicarSeis
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. 
  // Caso contrario, retorna false.
  //Escribe tu código aquí
  var n = numero.toString()
  n = n.length 
  if (n == 3){
    validar = true
  }else {
    validar = false
  }
return validar
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor 
  // recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.}

  contador = 7
do {
  numero += 5 
  contador --
  
} while (contador > 0 );


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
}