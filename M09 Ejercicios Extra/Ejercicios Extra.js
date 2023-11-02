/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  let arrB=[];
  for (let propiedad in objeto )
   arrB.push([propiedad, objeto[propiedad]]);
return arrB;
   

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let contador=1;
   var objetoDeCaracteres = {};
   string = string.split("").sort().join("");

   for (let i=0 ; i<string.length; i++){
      objetoDeCaracteres[string[i]] = objetoDeCaracteres[string[i]]+1 || 1;

   }
return objetoDeCaracteres;
  
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayus=[];
   let minus=[];
    separar=string.split("");
   // console.log(separar);
for(const letra of separar){
    if (letra === letra.toUpperCase()) {
        mayus.push(letra);
    }else  {
        minus.push(letra);
    }
}
return(mayus.join("")+minus.join(""));

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let juntar=[];
   let alverre=[];
   juntar=frase.split(" ");
   //console.log(juntar);
   for(const letra of juntar){
       alverre.push(letra.split("").reverse().join(""));
       //console.log(letra.split("").reverse());
   }
   return(alverre.join(" "));

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   aString=numero.toString();
   comparar=aString.split("").reverse().join("");  
   if (aString === comparar ){
   return("Es capicua");
   }else {
      return("No es capicua");
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   separar= string.split("");
   const filtrar = separar.filter(letra => (letra != "a" ) && (letra != "b") && (letra != "c") );

   return (filtrar.join(""))
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => a.length - b.length);
   return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   newArray=[];
   let longitud1,longitud2;
   if (array1.length < array2.length){
    longitud1=array1.length;
    for(let i=0; i<longitud1 ; i++){
        for(let j=0; j<array2.length;j++){
          if(array1[i]===array2[j]){
           newArray.push(array1[i]);
           i++;
           j=0;
          }
       }
      }
   }else{
    longitud2=array2.length;
    for(let i=0; i<longitud2 ; i++){
        for(let j=0; j<array1.length;j++){
          if(array2[i]===array1[j]){
           newArray.push(array2[i]);
           i++;
           j=0;
          }
       }
      }
   }

return newArray;


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
