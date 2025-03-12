// Crear una funcion que indique si una palabra es isograma.
function esIsograma(palabra){
    let letrasUnicas = new Set(palabra.toLowerCase());

    if(palabra.length!=letrasUnicas.size)
        return false;
    else return true;
   
}

console.log(esIsograma("murciélago") ? "La palabra es isograma" : "La palabra es no isograma");