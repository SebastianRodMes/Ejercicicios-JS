/*
Escribe una función llamada esPalindromo(palabra) que reciba una palabra como parámetro y 
devuelva true si la palabra es un palíndromo y false en caso contrario.
*/
function esPalindrome(palabra) {
    let palabraInvertida="";
for (let i = palabra.length-1; i >= 0; i--) {


palabraInvertida += palabra[i]; 

}
return palabra != palabraInvertida ?  false : true;

}

console.log(esPalindrome("")); // true
 // true




