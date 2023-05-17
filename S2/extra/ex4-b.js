const array = ["uno","dos","tres","cuatro","cinco"];
const text="cuatro";
let resultado;

removeItem(array,text);
console.log("Array con elemento eliminado: " + array);

function removeItem(array,text){
    findArrayIndex(array,text);
    //console.log(resultado);
    array.splice(resultado,1);
    return array;
}

function findArrayIndex(array,text){
    resultado = array.indexOf(text);
    return resultado;
}

    