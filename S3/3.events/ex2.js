const value$$ = document.querySelector("input");
//      OJO COMILLAS EN EL EVENTO
value$$.addEventListener("focus",showValor);
function showValor(evento){
    console.log(evento.target.value)
}
// TARGET.VALUE PARA SACAR  VALOR DE UN NODO/ELEMENTO DE FORMULARIO